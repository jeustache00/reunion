import React from 'react';
import axios from 'axios';
import Options from './Options'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.emailOnChange = this.emailOnChange.bind(this)
    this.passwordOnChange = this.passwordOnChange.bind(this)
    this.login = this.login.bind(this)
  }

  emailOnChange(event) {
    this.setState({email: event.target.value})
  }

  passwordOnChange(event) {
    this.setState({password: event.target.value})
  }



  login(event){
    event.preventDefault();
    console.log("login clicked")
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/api/users/login', userInfo)
     .then((res) =>
     {
      if(!res.data){
        console.log('Invalid User')
      }else{
       window.localStorage.setItem('user', JSON.stringify(userInfo))
        // console.log("user=", window.localStorage.getItem('user'))
        this.props.history.push('/')
      }
     })
     .catch(function (error) {
      console.log(error);
     });

  }

  render(){

    return(
      <div className="container">
      <Options />

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
                  <input type="text" name="email" placeholder="E-Mail Address" id="input-email" className="form-control"  onChange={this.emailOnChange} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password" id="input-password" className="form-control"  onChange={this.passwordOnChange} />
                  <br />
                  <a href="#">Forgotten Password</a>

                  </div>
                <input type="submit" value="Login" className="btn btn-primary" onClick={this.login} />
            </div>
          </div>
        </div>
        </div>
    )
  }
}

