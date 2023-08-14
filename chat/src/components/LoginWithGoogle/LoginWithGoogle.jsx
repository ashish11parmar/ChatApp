import React, { useEffect, useState } from 'react';
import ChatView from '../ChatView/ChatView';
import {auth, provider} from '../DatabaseConfig/config.js';
import {signInWithPopup} from 'firebase/auth';
import './LoginWithGoogle.css';
import Google from '../images/google.png'


function LoginWithGoogle() {

    const [Value, SetValue] = useState("");

    const  handleClick = ()=>{
        signInWithPopup(auth, provider).then((data)=>{
            SetValue(data.user.email);
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("name", data.user.displayName)
            localStorage.setItem("profile", data.user.photoURL)
        })
    }

    useEffect(()=>{
        SetValue(localStorage.getItem('email'));
    })

  return (
    <>

{ Value ? <ChatView/> : 
  <div className='container'>
  <div className='login'>
        <h3 className='heading'>Welcome to ChatApp</h3>
        <small className='small'>Continue with google</small>
        <img src={Google} alt='google' onClick={handleClick} className='google btn btn-outline-light mt-3 mb-3'/>
    </div>
    </div>
}
    

    </>
  )
}

export default LoginWithGoogle