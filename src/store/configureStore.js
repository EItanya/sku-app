import rootReducer from './store';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger'
import * as Actions from '../actions/actions.js'

const middleware = [reduxThunk];

if (!process.env.NODE_ENV) {
  const logger = createLogger({
    predicate: (getState, action) => !action.type.includes("redux-form")
  });
  middleware.push(logger);
}


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  store.dispatch(Actions.verifyAuth());

  return store;
}