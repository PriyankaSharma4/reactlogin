import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import Layout from './components/Layout';

import ReactToken from 'react-token'

class App extends Component {
  render() {
    return (<Provider store={store}>
          <Layout/>
          </Provider>
   
    );
  }
}

export default App;
