import { ActionType } from "../../types";

const INITIAL_STATE = {
  userName : '',
}

function userReducer(state = INITIAL_STATE, action : ActionType) {
  switch (action.type) {
    case 'SAVE_USER':
      return { userName : action.payload };
      default : return state;
      }
}

export default userReducer;
