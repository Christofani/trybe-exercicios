import { legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

type ActionType = {
  type: string;
}

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
const store = createStore(reducer, composeWithDevTools());

const action = {
  type: "INCREMENT_COUNTER",
}

const button = document.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", () => {
  store.dispatch(action);
  
});

store.subscribe(() => {
  const state = store.getState();
  const countElement = document.querySelector("h2") as HTMLHeadingElement;
  countElement.innerText = state.count.toString();
});