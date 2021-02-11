
import './App.css';
import React from 'react';
import HomePage from './Container/HomePage';
import Services from './Container/Services';
import Header from './Components/Header';
import Careers from './Container/Careers';
import ContactUs from './Container/ContactUs';
import Products from './Container/Products';
import AboutUs from './Container/AboutUs';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App () {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <BrowserRouter>
          <div>
            <Header/>

            <Switch>
              <Route exact path="/" component={HomePage}></Route>
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
            </Switch>
          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
