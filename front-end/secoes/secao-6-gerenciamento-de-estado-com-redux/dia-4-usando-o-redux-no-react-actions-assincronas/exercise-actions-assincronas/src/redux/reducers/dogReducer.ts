import { ReduxState } from '../../types';
import {REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED} from '../actions/index';

const initialState: ReduxState = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  type: string;
  payload: string;
};

const dogReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        imageURL: '',
      };
      default: 
      return state;
  }
}
export default dogReducer;