import React, { Component } from 'react';
import Loadable from 'react-loadable';

import 'static/css/bootstrap.min.css';
import 'static/css/app.css';

import Header from 'components/header';

// Loadable Components
const Movie = Loadable({
  loader: () => import(/* webpackChunkName: "movie", webpackPreload: true */ 'components/movie'),
  loading: () => { return '' }
});

const Watched = Loadable({
  loader: () => import(/* webpackChunkName: "watched", webpackPreload: true */ 'components/watched'),
  loading: () => { return '' }
});

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <Movie />
        <Watched />
      </div>
    )
  }
}

export default App;