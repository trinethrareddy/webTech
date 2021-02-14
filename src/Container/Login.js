
import React from 'react';

import '../styles/login.css';

// function SubmitLogin() {
//     console.log('hi');
// }

function Login(){

    const submitLogin = function(){
        console.log('sd');
    }
    
    return (
        <div className="content__box">
            <h1 className="content__container">Log In to developedbyed | Creative Programming and Design Courses</h1>
            {/* <div className="content__container-text">
                <input type="text">Email Address</input>
            </div> */}
            <div className="content__container-form">
                <label className="content__container-label" htmlFor="user_email">Email Address </label>
                <input className="content__container-input" autoFocus="autofocus" type="email" id="user_email" ></input>
            </div>
            <div className="content__container-form">
                <label className="content__container-label" htmlFor="user_pwd">Password </label>
                <input className="content__container-input"  type="password" id="user_pwd" ></input>
            </div>
            <div className="form__button-outer">
            <button className="form__button" onClick={submitLogin}>Login</button> 
            </div>
            {/* onClick={submitLogin}*/}  
        </div>
    )

    
}

export default Login;
