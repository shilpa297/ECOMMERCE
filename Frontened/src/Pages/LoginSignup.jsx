import React from 'react'
import './LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className="loginsignup" >
        <div className="loginsignup-container" >
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
               
                <input type="text" placeholder='your name' />
                 <input type="email" placeholder='your email' />
                  <input type="password" placeholder='password' />
            </div>
             
            <button>Continue</button>
            <p className="loginsignup-login">ALready have an account <span>Login</span></p>
            <div clasName="loginsignup-agree">
                <input type="checkbox" name=' ' id='' />
                <p>BY continuing, i agree to the terms of use and privacy poicy</p>
            </div>
        </div>
        
    </div>
    
  )
}

export default LoginSignup





