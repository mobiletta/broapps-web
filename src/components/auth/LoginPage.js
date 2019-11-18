import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import VideoBg from 'reactjs-videobg';
import webm from '../../public/assets/Vegas.webm';
import mp4 from '../../public/assets/Vegas.mp4';
import poster from '../../public/assets/Vegas_First_Frame.png';

import { GoogleLoginButton, GithubLoginButton, FacebookLoginButton, TwitterLoginButton, AmazonLoginButton, InstagramLoginButton, LinkedInLoginButton, MicrosoftLoginButton } from "react-social-login-buttons";

import "./Login.css";
import "./InputBox.css";

export const LoginPage = ({ startLogin }) => (
  <div className="Login">
    <VideoBg poster={poster}>
      <VideoBg.Source src={webm} type="video/webm" />
      <VideoBg.Source src={mp4} type="video/mp4" />
    </VideoBg>
    <div className="box">
      <h2>Login</h2>
      <div className="form">
        <div className="inputBox">
          <input type="email" name="email" />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="password" name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
          <label>Password</label>
        </div>
        <p>Please join with your email or by social network</p>
        <GoogleLoginButton onClick={startLogin} />
        <FacebookLoginButton onClick={startLogin} />
        <TwitterLoginButton onClick={startLogin} />
        <AmazonLoginButton onClick={startLogin} />
        <InstagramLoginButton onClick={startLogin} />
        <MicrosoftLoginButton onClick={startLogin} />
        <GithubLoginButton onClick={startLogin} />
        <h3>OR</h3>
        <button className="login-anon-button" onClick={startLogin}>Login by Phone</button>
        <button className="login-anon-button" onClick={startLogin}>Login as Guest</button>
        <input type="submit" name="sign-in" value="Sign In" />
      </div>
    </div>

    <div className="content">
      <div class="text-effect">
        <h1 class="neon" data-text="Bro Leans" contenteditable></h1>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
