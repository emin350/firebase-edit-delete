import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase"

function Login() {

const login =()=>{
auth.signInWithPopup(provider).catch((error)=>{ alert("error.message")});
};

return (
        <div className="login">
          <div className="container">
           <button onClick={login}>Google ile Giriş Yapınız</button>
    
           </div> 
    
        </div>
    )
}

export default Login
