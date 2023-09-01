import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import dogReducer from "./reducers/dogReducer";
import { applyMiddleware } from "redux";

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;