import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
//import { startLogin } from '../actions/auth';
import VideoBg from 'reactjs-videobg';
import webm from '../../media/Vegas.webm';
import mp4 from '../../media/Vegas.mp4';
import poster from '../../media/Vegas_First_Frame.png';
//import { GoogleLoginButton, GithubLoginButton, FacebookLoginButton, TwitterLoginButton, AmazonLoginButton, InstagramLoginButton, LinkedInLoginButton, MicrosoftLoginButton } from "react-social-login-buttons";

import "./Login.css";
import "./InputBox.css";


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <div className="background-video">
          <VideoBg poster={poster}>
            <VideoBg.Source src={webm} type="video/webm" />
            <VideoBg.Source src={mp4} type="video/mp4" />
          </VideoBg>
        </div>
        <div className="box">
        <h2>Sign In</h2>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="inputBox">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
