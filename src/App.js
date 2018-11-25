import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import Layout from "./components/Layout/Layout";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
