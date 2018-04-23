import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';
import sendDataSaga from './sendDataSaga';

function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}
function* watchSendData() {
  yield takeLatest(types.SEND_DATA, sendDataSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    fork(watchSendData)
    // another action listener,
  ]);
}
