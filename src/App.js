import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { initStore } from './reduxSources/createStore';
import AppRouter from './components/AppRouter/AppRouter';
import Layout from './components/Layout/Layout';

const store = initStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
