import React from 'react';
import {
  Route,
  withRouter,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom"

import Home from './pages/Home'
import Header from './components/header/Header'
import Shop from './pages/shop/Shop'
import NotFound from './components/404/NotFound'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="general-wrapper">
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/shop' component={Shop} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default withRouter(App);
