import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/header/Header'
import Shop from './pages/shop/Shop'
import NotFound from './components/404/NotFound'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="general-wrapper">
      <Header />
      <Switch>
        <Route path='/home' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/shop' component={Shop} exact />
        <Route path='/gallery' component={NotFound} />
        <Route path='/blog' component={NotFound} />
        <Route path='/contacts' component={NotFound} />
        <Redirect from="/" to="/home" />
        <Route  />
      </Switch>
      <Footer />
    </div>
  );
}

export default App