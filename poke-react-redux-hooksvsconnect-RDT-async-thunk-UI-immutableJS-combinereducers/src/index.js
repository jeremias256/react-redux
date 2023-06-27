import React from 'react';
import ReactDOM from 'react-dom/client';
/* -------------------------------------------------------------------------- */
/*                                    redux                                   */
/* -------------------------------------------------------------------------- */
import {compose, applyMiddleware, legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
/* ------------------------------- redux-thunk ------------------------------ */
import thunk from 'redux-thunk';
/* --------------------------------- reducer -------------------------------- */
import rootReducer from './reducers/rootReducer';
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

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));


const store = createStore(
  rootReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
