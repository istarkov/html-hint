import React, { Component } from 'react';

import 'normalize.css/normalize.css';
import './App.sass';

import Layout from './Layout.js';
import Page from './Page.js';

// This class is needed for hmr
export default class App extends Component {
  render() {
    return (
      <Layout><Page /></Layout>
    );
  }
}
