import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div className="login">
            <div className="credentials" span="12">
                <svg-icon className="logo" icon="logo"></svg-icon>
                <h1>Login to your account</h1>
                <form ref="credentials">
                    <form-item prop="userid">
                        <label htmlFor="userid">Username or Email</label>
                        <input type="text" size="large" name="userid">
                            
                        </input>
                    </form-item>
                    <form-item prop="password"><label htmlFor="password">Password</label>
                        <input type="password" size="large" name="password">
                            
                        </input>
                    </form-item>
                    <button className="loginButton" type="primary">Login</button>
                </form>
                <h3>Want to work with Ruby?
                    <a >Signup!</a>
                </h3>
            </div>
            <div className="fancyImage" span="12"></div>
        </div>
    );
  }
}
 
export default Home;