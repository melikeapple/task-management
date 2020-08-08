import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import * as app from "./ducks/app.duck";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app: app.reducer,
  });

export function* rootSaga() {
  yield all([yield fork(app.saga)]);
}
