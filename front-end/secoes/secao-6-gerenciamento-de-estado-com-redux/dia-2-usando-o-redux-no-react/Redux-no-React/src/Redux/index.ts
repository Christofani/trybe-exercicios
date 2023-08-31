import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducers/counterReducer";
// type ActionType = {
//   type: string;
//   payload: number;
// }

// const INNITIAL_STATE = {
//   count: 0,
// };

// const reducer = (state = INNITIAL_STATE, action: ActionType) => {
//   switch (action.type) {
//     case "INCREMENT_COUNTER": {
//       return {
//         count: state.count + action.payload,
//     }
//   }
//   default: return state;
// }
// };

const store = createStore(counterReducer, composeWithDevTools())

export default store;