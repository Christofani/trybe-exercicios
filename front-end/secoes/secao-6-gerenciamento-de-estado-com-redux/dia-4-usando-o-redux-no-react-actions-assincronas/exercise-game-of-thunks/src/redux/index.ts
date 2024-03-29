import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import charReducer from "./reducers/charReducer";

 const store = createStore(charReducer,composeWithDevTools(applyMiddleware(thunk)))

 export default store;