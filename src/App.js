
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
import AllCourses from './Components/AllCourses.js'
import MyCourses from './Components/MyCourses.js';

import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';


function App () {

//   const submitLogin1 = () =>{
//     // e.preventDefault();
//     // nameEl.focus();
//      //console.log(nameEl.current.value,passwordEl.current.value );
//      console.log("TEST");

//  }

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

              <Route path="/courses">
                <AllCourses/>
              </Route>

              <Route path="/my-courses">
                <MyCourses/>
              </Route>

              <Route path="/services">
                <Services/>
              </Route>

              <Route path="/login">
                 <Login />{/*click={submitLogin1} */}
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
