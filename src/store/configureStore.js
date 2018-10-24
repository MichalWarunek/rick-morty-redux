import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from '../reducers/characters';
import filtersReducer from '../reducers/filters';
import pagesReducer from  '../reducers/pages';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer,
      filters: filtersReducer,
      pages: pagesReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
