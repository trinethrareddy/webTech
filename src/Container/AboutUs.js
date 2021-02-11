import React, {useEffect, useState} from 'react';

const AboutUs = () => {
    const [userDetails , setUserDetails] = useState({userName:'', password:''});

    useEffect(() => {
      
    }, []);

    const submitButton = () => {
        console.log('Submitted');
    }

    const inputChange = (event)  =>{
        console.log(event.target.value);
        const name = event.target.name;
        console.log(userDetails);
        const tempUserData = {...userDetails, [name]: event.target.value};
        console.log(tempUserData);
        setUserDetails(tempUserData);
    }
    
    return (
        <>
            <div>
                About Us compoents
              
            </div>
            userName: {userDetails.userName}
            <form>
                <div>
                    <label>
                        User name
                    </label>
                    <input type="text" placeholder="enter username" name="userName" onChange={inputChange}/>
                </div>
                <div>
                    <label>
                       Password
                    </label>
                    <input type="text" placeholder="enter Password" name="password" onChange={inputChange}/>
                </div>

                <button type="button" onClick={submitButton}>Submit</button>
            </form>
        </>
    )
}

export default AboutUs
