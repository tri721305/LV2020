import React, {Component} from 'react'
// import '../../App.css'
import Navdisplay from './Navdisplay'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Destination from '../Destination/Destination'
import Login from '../Login/Login'
import News from '../News/News'
import Slidebackgroundtest from '../../slide';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SlideBackgroundtest from '../../slide'
function Navtest() {
  return (
    <Router>
      <div>
        {/* <h1>App</h1> */}
        <Navdisplay />
          <Switch>
            <Route path="/" exact component={SlideBackgroundtest} />
            <Route path="/destination"  component={Destination}/>
            <Route path="/blog" component={Blog} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

const Home = null
export default Navtest;