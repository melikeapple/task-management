import {takeLatest} from "redux-saga/effects";

export const actionTypes = {
    AppProcess: "[App Api] APP PROCESS"
};

export const actions = {
    appProcess: () => ({type: actionTypes.AppProcess})
}

const initialState = {
    entity: null
}

export const reducer = (
    state = initialState,
    action
) => {
    const {type,payload} = action
    switch (type) {
        default:
            return state

    }
}

export function* saga() {
    yield takeLatest(actionTypes.AppProcess, function* AppProcess() {

    })
}