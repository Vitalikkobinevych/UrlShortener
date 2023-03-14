import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home'
import UrlShort from './components/UrlShort'
import Login from './components/Login'
import { About } from './components/About';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Url' component={UrlShort} />
        <Route path='/Login' component={Login} />
        <Route path='/About' component={About} />
        </Layout>
    );
  }
}
