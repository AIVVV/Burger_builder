import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = history => composeEnhancers(applyMiddleware(thunk));

export const initStore = history => createStore(rootReducer, enhancer(history));
