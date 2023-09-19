import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as create_store, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const store =  create_store(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;