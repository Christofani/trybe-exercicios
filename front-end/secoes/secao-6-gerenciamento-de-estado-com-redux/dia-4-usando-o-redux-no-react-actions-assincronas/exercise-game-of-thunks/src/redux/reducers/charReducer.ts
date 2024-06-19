import { CharState, CharType } from "../../types";

const initialState: CharState = {
  isFetching: false,
  character: null,
  error: null,
}

function charReducer(
  state: CharState = initialState,
  action: { type: string, character?: CharType, error?: string },
) {
  switch (action.type) {
    case "REQUEST_STARTED": 
      return {
        ...state,
        isFetching: true,
    }
    case 'REQUEST_SUCCESSFUL': 
      return {
        ...state,
        isFetching: false,
        character: action.character || null,
    };
    case 'REQUEST_FAILED':
      return {
        ...state,
        isFetching: false,
        error: action.error || 'Unknown error',
      }
      default: return state;
  }
}

export default charReducer;