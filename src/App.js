
import './App.css';
import React from 'react';
import HomePage from './Container/HomePage';
import Services from './Container/Services';
import Header from './Components/Header';
import Careers from './Container/Careers';
import ContactUs from './Container/ContactUs';
import Products from './Container/Products';
import AboutUs from './Container/AboutUs';
//import Login from 
import Login from  './Container/Login.js';
import SignUp from  './Container/SignUp.js';

import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';


function App () {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <BrowserRouter>
          <div>
            <Header/>

            <Switch>
            <Route exact path = "/">
              <Redirect to = "/home" />
            </Route>
              <Route path="/home" component={HomePage}></Route>
              <Route path="/about">
                <AboutUs/>
              </Route>
              
              <Route path="/products">
                <Products/>
              </Route>

              <Route path="/career">
                <Careers/>
              </Route>
              <Route path="/contact-us">
                <ContactUs/>
              </Route>

              <Route path="/services">
                <Services/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <SignUp/>
              </Route>
            </Switch>
          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
