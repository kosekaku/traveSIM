import React, { Component } from 'react';
import Form from './commons/form';
import auth from '../services/auth';
import {Header} from './header';


class Login extends Form {
  // state
  state = {
    data: {
      email: "", password: ""
    },
    error: {}
  };
 
  // server calls
  doSubmit = async () => {
    // call  server
    try {
      const {email, password } = this.state.data;
      console.log('Initiating user login... , talking to api');
      console.log('server response..........');
      await auth.Login(email, password); // some method in the services
    } catch (ex) {
      console.log(ex);      
    }


  };
  render(){
    const customizedStylesClass ="dynamicStyles"; 
    return(
      <div className="page-content-login">
				<form onSubmit={this.handleSubmit} id="login"> <br></br> <br></br>
						<p className="font-weight-600">Please login.</p>
            {this.renderInput("email", "Email", "email","Your email id", `${customizedStylesClass}`)}
            {this.renderInput("password", "Password", "password","Enter password")}
								
						<div className="text-left">
            {this.renderButton("Login")}
						</div>
				</form>
			</div>
    );
  }
}

export default Login;