import React from 'react';
import {ConnectedRouter} from "connected-react-router";
import {hot} from "react-hot-loader/root";
import {history} from "./store/store";

function App() {
    return (
        <ConnectedRouter history={history}>
            <div className="App">
                Task Management
            </div>
        </ConnectedRouter>
    );
}

export default hot(App);
