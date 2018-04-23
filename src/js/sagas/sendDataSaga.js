import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* SendDataSaga(action) {
  const { query } = action.payload;
  yield put(actions.sendDataAttempt());
  yield call(delay, 1000);
  try {
    const data = yield call(api.receiveStudentRecord, query);
    yield put(actions.sendDataSuccess(data));
  } catch (e) {
    yield put(actions.sendDataFail(e));
  }
}
