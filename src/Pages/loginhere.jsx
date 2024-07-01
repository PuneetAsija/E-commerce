import React from 'react'

const loginhere = () => {
  return (
    <div className='loginhere'>
    <div className="loginloginhere-container">
      <h1>login Now</h1>
      <div className="loginloginhere-fields">
        <input type="text" placeholder='Enter Your Name' />
        <input type="email"  placeholder='Enter Email Adress'/>
        <input type="password" placeholder='Password'/>
      </div>
      <button>Continue</button>
      <p className='loginloginhere-login'>Already have an account ? <span>Login Here</span></p>
      <div className="loginloginhere-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing , I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
    
  </div>
  )
}

export default loginhere
