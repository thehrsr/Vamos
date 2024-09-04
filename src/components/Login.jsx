import React from 'react'
import '../css/Login.css'

export default function Login() {
  return (
    <div>
      <section className="Login_sec">
  
  <div className="form-box">

    <div className="form-value">

      <form>
     

        <h2>Login</h2>

        <div className="inputbox">

          {/* <!-- <ion-icon name="mail-outline"></ion-icon> --> */}

          <input type="email" required/>

          <label>Email</label>

        </div>

        <div className="inputbox">

          {/* <!-- <ion-icon name="lock-closed-outline"></ion-icon> --> */}

          <input type="password" required/>

          <label>Password</label>

        </div>

        <div className="forget">

          <label><input type="checkbox"/>Remember Me</label>

          <a href="#">Forgot Password</a>

        </div>
         <div className="submit-button correct">

        <button id="hi">Log In</button>
          </div>
        <div className="register">

          <p className='regi'>Don't have an account? <a href="#">Sign Up</a></p>

        </div>

      </form>

    </div>

  </div>

</section>
    </div>
  )
}
