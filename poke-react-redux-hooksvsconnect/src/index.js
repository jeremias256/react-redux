import React from 'react';
import ReactDOM from 'react-dom/client';
/* -------------------------------------------------------------------------- */
/*                                    redux                                   */
/* -------------------------------------------------------------------------- */
import { legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
/* --------------------------------- reducer -------------------------------- */
import {pokemonsReducer} from './reducers/pokemons';
/* -------------------------------------------------------------------------- */
/*                                   styles                                   */
/* -------------------------------------------------------------------------- */
import './index.css';
/* -------------------------------------------------------------------------- */
/*                                 componentes                                */
/* -------------------------------------------------------------------------- */
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
