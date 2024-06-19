import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {render} from '@testing-library/react';
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import counterReducer from "../redux/reducers/counterReducer/counterReducer";
import { RootState } from "../types";
import thunk from "redux-thunk";

function renderWithRedux(
  component: JSX.Element,
  state : RootState | undefined = undefined,
  store = createStore(combineReducers({ counterReducer }), state, applyMiddleware(thunk))
) {
  const user = userEvent.setup();
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
    user,
  };
}
export default renderWithRedux;