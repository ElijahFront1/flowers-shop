import React from 'react';
import {
  Route,
  withRouter,
} from "react-router-dom"

import Home from './pages/Home'
import Header from './components/header/Header'
import Shop from './pages/Shop'
import Gallery from './components/gallery/Gallery'
import NotFound from './components/404/NotFound'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="general-wrapper">
      <React.StrictMode>
          <Header />
          <Route path="/" component={Home} exact />
          <Route path='/home' component={Home} exact />
          <Route path='/shop' component={Shop} exact />
          <Route path='/gallery' component={Gallery} exact />
          <Route path='/not-found' component={NotFound} exact />
          <Route path='/cart' component={Cart} exact />
          {/* <Route component={NotFound} /> */}
      </React.StrictMode>
    </div>
  );
}

export default withRouter(App);
