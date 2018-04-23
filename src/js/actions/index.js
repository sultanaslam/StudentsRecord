import * as types from '../constants';

export function fetchDataAttempt() {
  return {
    type: types.FETCH_DATA_ATTEMPT
  };
}

export function fetchDataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFail(error) {
  return {
    type: types.FETCH_DATA_FAIL,
    payload: error
  };
}

export function fetchData() {
  return {
    type: types.FETCH_DATA,
    // payload: {
    //   query
    // }
  };
}
export function sendDataAction(query) {
  return {
    type: types.SEND_DATA,
    payload: {
      query
    }
  };
}

export function sendDataAttempt() {
  return {
    type: types.SEND_DATA_ATTEMPT
  };
}

export function sendDataSuccess() {
  return {
    type: types.SEND_DATA_SUCCESS,
    // payload: data
  };
}

export function sendDataFail(error) {
  return {
    type: types.SEND_DATA_FAIL,
    payload: error
  };
}

export function statusCheckedAction() {
  return {
    type: types.STATUS_CHECKED
  };
}