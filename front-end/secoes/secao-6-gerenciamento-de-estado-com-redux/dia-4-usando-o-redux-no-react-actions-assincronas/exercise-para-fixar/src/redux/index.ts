import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import gallery from './reducers/gallery';

const store = createStore(gallery,composeWithDevTools(applyMiddleware(thunk)));

export default store;
