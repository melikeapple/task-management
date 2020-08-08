import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, rootSaga } from "./rootDuck";
import { actions } from "./ducks/app.duck";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  {},
  compose(
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, thunk)
    )
  )
);
sagaMiddleware.run(rootSaga);
store.dispatch(actions.appProcess());

export default store;
