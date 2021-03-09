
import React from 'react';

//import App from '../App.js'

import '../styles/login.css';
import {useEffect, useRef, useState} from 'react';

// function SubmitLogin() {
//     console.log('hi');
// }

const Login = (props) => {

    // const submitLogin = () =>{
    //     console.log('sd');
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({email: '',password: ''});

    // const nameEl = React.useRef(null);
    // const passwordEl = React.useRef(null);


    useEffect(() => {
        //console.log(nameEl.current);
       // nameEl.current.focus();
       //console.log(email,password);

    }, [])


    const submitLogin = () =>{
       // e.preventDefault(); //
       // nameEl.focus();
        //console.log(nameEl.current.value,passwordEl.current.value );
        console.log(userData);

    }

    const updateFormData = (event) =>{
        const name = event.target.name;
        const val = event.target.value;
        setUserData({
            [name] : val
        })

    }

    

    // this.nameEl = React.createRef();
    // this.passwordEl = React.createRef();



    
    return (
        <div className="content__box">
            <h1 className="content__container">Log In to developedbyed | Creative Programming and Design Courses</h1>
            {/* <div className="content__container-text">
                <input type="text">Email Address</input>
            </div> */}
            <div>
            {/* <form onClick={submitLogin}> */}
            <div className="content__container-form">
                {/* <form onSubmit={submitLogin}> */}
                <label className="content__container-label" htmlFor="user_email">Email Address </label>
                <input className="content__container-input" autoFocus="autofocus" type="email" id="user_email" name='email'  onChange={e => updateFormData(e)} ></input>
                
            </div>
            <div className="content__container-form">
                <label className="content__container-label" htmlFor="user_pwd" >Password </label>
                <input className="content__container-input"  type="password" id="user_pwd" name='password' onChange={e => updateFormData(e)} ></input>
            </div>
            {/* <input type="text" onChange= {submitLogin(email, password)} value={email} ></input> */}
            {/* <p onClick={props.click}> hey</p> */}
            <div className="form__button-outer">
            <button type = "submit" className="form__button" onClick={() => submitLogin()}>Login</button> 
            {/* onClick={submitLogin} */}
            </div>
            {/* onClick={submitLogin}*/} 
            {/* </form> */}
            </div> 
            
        </div>
    )

    

    
};

export default Login;
