import {call, delay, put, takeEvery, takeLatest} from "redux-saga/effects";
import { ASYNC_INCREMENT, INCREMENT } from "../redux/constants/counter"

function* increment() {
    console.log("waiting 1000ms...");
    yield delay(1000);
    try {
        yield put({type: INCREMENT, user: user});
     } catch (e) {
        yield put({type: INCREMENT, message: e.message});
     }
}

function* rootSaga() {
    yield takeEvery(ASYNC_INCREMENT, increment);
}

export default rootSaga;