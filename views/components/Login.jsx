import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
      
  return (
<div id="content" className="col-sm-12">
          <h1 className="title">Account Login</h1>
          <div className="row">
            <div className="col-sm-6">
              <h2 className="subtitle">New Customer</h2>
              <p><strong>Register Account</strong></p>
              <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
              <a href="register.html" className="btn btn-primary">Continue</a> </div>
            <div className="col-sm-6">
              <h2 className="subtitle">Returning Customer</h2>
              <p><strong>I am a returning customer</strong></p>
                <div className="form-group">
                  <label>E-Mail Address</label>
                  <input type="text" name="email" placeholder="E-Mail Address" id="input-email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password" id="input-password" className="form-control" />
                  <br />
                  <a href="#">Forgotten Password</a>

                  </div>
                <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </div>
        </div>
    )
}

module.exports = Login