import { Dispatch,CharType } from "../../types";

export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_SUCCESSFUL = "REQUEST_SUCCESSFUL";
export const REQUEST_FAILED = "REQUEST_FAILED";

function requestStarted() {
  return {
    type: 'REQUEST_STARTED',
  };
}

function requestSuccessful(character: CharType) {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: character,
  };
}

function requestFailed(error: string) {
  return {
    type:'REQUEST_FAILED', error,
  };
}

export function fetchCharacter(name: string) {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data:CharType[] = await response.json();
      dispatch(requestSuccessful(data[0]));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}