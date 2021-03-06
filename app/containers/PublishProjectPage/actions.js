import {
  PUT_PROJECT,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_ERROR,
  CLEAN_PUT_PROJECT,
} from './constants';

export function putProject(content) {
  return {
    type: PUT_PROJECT,
    content,
  };
}

export function putProjectLoaded(content) {
  return {
    type: PUT_PROJECT_SUCCESS,
    content,
  };
}

export function putProjectError(error) {
  return {
    type: PUT_PROJECT_ERROR,
    error,
  };
}

export function cleanPutStates() {
  return {
    type: CLEAN_PUT_PROJECT,
  };
}
