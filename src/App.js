import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { initStore } from './reduxSources/createStore';
import { Layout } from './exports/components-exports';
import AppRouter from './components/AppRouter/AppRouter';

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
