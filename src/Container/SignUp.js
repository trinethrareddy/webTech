import React from 'react';

import '../styles/login.css';

import {useEffect, useRef, useState} from 'react';

const SignUp = () => {

    const [username, setName] = useState("");
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const submitSignUp = (username,userid,pwd,cfmpwd) =>{
        // e.preventDefault();
        // nameEl.focus();
         //console.log(nameEl.current.value,passwordEl.current.value );
         if(pwd===cfmpwd){
            console.log(username,userid,pwd);
         }
         else{
             console.log('Passowrd Mismatch!!');
         }
 
     }
    return(
        <div className="content__box">
            <h1 className="content__container">Sign Up to developedbyed | Creative Programming and Design Courses</h1>
            {/* <div className="content__container-text">
                <input type="text">Email Address</input>
            </div> */}
            <div className="content__container-form">
                <label className="content__container-label" htmlFor="user_name">Full Name </label>
                <input className="content__container-input" autoFocus="autofocus" type="text" id="user_name" onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="content__container-form">
                <label className="content__container-label" htmlFor="user_email">Email Address </label>
                <input className="content__container-input" autoFocus="autofocus" type="email" id="user_email" onChange={e => setUserId(e.target.value)}></input>
            </div>
            
            <div className="content__container-pwd">
                <label className="content__container-label" htmlFor="user_pwd">Password </label>
                <input className="content__container-input"  type="password" id="user_pwd" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="content__container-cfmpwd">
                <label className="content__container-label" htmlFor="user_cfm_pwd">Confirm Password </label>
                <input className="content__container-input"  type="password" id="user_cfm_pwd" onChange={e => setConfirmPassword(e.target.value)}></input>
            </div>
            <div className="content__container-form1">
                <label className="promotional_emails">
                    <input type="checkbox" id="promotional_emails" />
                    <span>I agree to receive instructional and promotional email</span>
                </label>
            </div>
            <div className="content__container-form1">
                <label className="terms_agree">
                    <input type="checkbox" id="terms_agree" />
                    <span className="content__container-terms">
                        I agree to <strong>Teachable's</strong> <a target="_blank" href="https://teachable.com/terms-of-service/" rel="noopener">Terms of Use</a> &amp; <a target="_blank" href="https://teachable.com/privacy-policy/" rel="noopener">Privacy Policy</a><br /> and <strong>developedbyed | Creative Programming and Design Courses's</strong> <a href="https://developedbyed.com/p/terms" target="_blank" rel="noopener">Terms of Use</a> &amp; <a href="https://developedbyed.com/p/privacy" target="_blank" rel="noopener">Privacy Policy</a>
                    </span>
                </label>
            </div>
            
            <div className="form__button-outer">
            <button className="form__button" onClick={() => submitSignUp(username,userid,password,confirmpassword)}>SignUp</button> 
            </div>
            {/* onClick={submitLogin}*/}
            
        </div>
    )
}

export default SignUp;