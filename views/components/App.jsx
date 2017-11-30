import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Navigation from './Navbar'
import Footer from './Footer'
import Polls from '../containers/Polls'
import Product from '../containers/Product'
import Product2 from '../containers/Product2'
import Cart from '../containers/Cart'

const App = () => (
  <div className="wrapper-wide">
    <Navigation />

    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/polls" component={Polls} />
        <Route path="/product" component={Product} /> 
        <Route path="/cart" component={Cart} /> 
        <Route path="/product2" component={Product2} /> 
      </Switch>
    </main>

    <Footer />

  </div>
)

module.exports = App
