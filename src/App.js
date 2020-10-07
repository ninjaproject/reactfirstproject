import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Switch, Route ,Redirect} from 'react-router-dom';
import About from './About'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css';


function App() {
  return (
    <>
    <Navbar />
      <Switch >
      
        <Route exact path='/' component={Home}   />
        <Route exact path='/about' component={About}   />
        <Route exact path='/service' component={Service}   />
        <Route exact path='/contact' component={Contact}   />
        <Route  Redirect='/'   />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
