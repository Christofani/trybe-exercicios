import {legacy_createStore as  createStore } from "redux";
import { ReduxState } from "../types";
import userReducer from "../redux/reducers/userReducer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { userEvent } from "@testing-library/user-event";


function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string  = '/',
  state: ReduxState | undefined = undefined,
  store = createStore(userReducer, state)
) {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>
          {component}
        </Provider>
      </BrowserRouter>
    ),
    user: userEvent.setup(),
    store,
  }
}

export default renderWithRouterAndRedux;