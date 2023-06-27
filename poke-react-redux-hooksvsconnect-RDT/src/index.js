import React from 'react';
import ReactDOM from 'react-dom/client';
/* -------------------------------------------------------------------------- */
/*                                    redux                                   */
/* -------------------------------------------------------------------------- */
import {compose, applyMiddleware, legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
/* --------------------------------- reducer -------------------------------- */
import {pokemonsReducer} from './reducers/pokemons';
/* --------------------------------- middleware -------------------------------- */
import {featuring, logger} from './middlewares';
/* -------------------------------------------------------------------------- */
/*                                   styles                                   */
/* -------------------------------------------------------------------------- */
import './index.css';
/* -------------------------------------------------------------------------- */
/*                                 componentes                                */
/* -------------------------------------------------------------------------- */
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
)

const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
