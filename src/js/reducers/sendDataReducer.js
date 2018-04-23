import * as types from '../constants';

const initial = {
  isSuccess: false
};

export default function(state = initial, action) {

  switch (action.type) {
    case types.SEND_DATA_SUCCESS:
      return { ...state, isSuccess: true};
    case types.STATUS_CHECKED:
      return { ...state, isSuccess: false};
      // return {isSuccess:true}
    default:
      return state;
  }
}

