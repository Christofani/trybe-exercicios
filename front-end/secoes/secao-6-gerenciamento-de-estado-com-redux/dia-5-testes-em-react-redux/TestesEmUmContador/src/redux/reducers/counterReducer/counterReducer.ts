import { ActionType } from "../../../types";

const INNITIAL_STATE = {
   counter : 0
};

const counterReducer = (state = INNITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
    
        counter: state.counter + action.payload
      }
      default : return state;
  }
}

export default counterReducer;