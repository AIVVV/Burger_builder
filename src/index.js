import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { initStore } from './reduxSources/createStore';

import App from './App';
import './styles/styles.scss';

const store = initStore();

const initApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(initApp(), document.getElementById('root'));
