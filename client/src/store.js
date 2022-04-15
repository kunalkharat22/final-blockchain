import { applyMiddleware, createStore } from "redux";

import { verifyAuth } from './redux/ActionCreaters/userActions';

import reducers from './redux/Reducers/rootReducer.js';
import reduxThunk from 'redux-thunk';

import {composeWithDevTools} from "redux-devtools-extension"

export default function configureStore(persistedState) {

  const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );

  store.dispatch(verifyAuth());
  return store;
  
  }
