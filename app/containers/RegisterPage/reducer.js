import { fromJS } from 'immutable';

import {
  setSessionToken,
  setSessionClient,
  setSessionUid,
}
  from 'containers/App/session';

import {
  SESSION_TOKEN,
  SESSION_CLIENT,
  SESSION_UID,
}
  from 'containers/App/constants';

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

const initialState = fromJS({
  loadingRegister: false,
  errorRegister: null,
  responseRegister: null,
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return state
        .set('loadingRegister', true)
        .set('errorRegister', null)
        .set('responseRegister', null);
    case REGISTER_SUCCESS:
      setSessionToken(action.content.header.get(SESSION_TOKEN));
      setSessionClient(action.content.header.get(SESSION_CLIENT));
      setSessionUid(action.content.header.get(SESSION_UID));
      return state
        .set('loadingRegister', false)
        .set('responseRegister', action.content.body);
    case REGISTER_ERROR:
      return state
        .set('loadingRegister', false)
        .set('errorRegister', action.error);
    default:
      return state;
  }
}

export default registerPageReducer;
