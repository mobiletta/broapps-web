import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import VideoBg from 'reactjs-videobg';
import webm from '../../media/Vegas.webm';
import mp4 from '../../media/Vegas.mp4';
import poster from '../../media/Vegas_First_Frame.png';
//import { GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { firebase } from '../../store/createReduxStore';
// eslint-disable-next-line no-unused-vars
import app from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './SignIn.module.css';
import boxStyles from './TransparentBox.module.css';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className={boxStyles.backgroundvideo}>
          <VideoBg poster={poster}>
            <VideoBg.Source src={webm} type="video/webm" />
            <VideoBg.Source src={mp4} type="video/mp4" />
          </VideoBg>
        </div>
        <div className={boxStyles.transparentbox}>
          <h2>Sign In</h2>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className={boxStyles.inputBox}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className={boxStyles.inputBox}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
              <div className={boxStyles.inputBox}>
                <button className="btn blue lighten-1 z-depth-0">Login</button>
                <div className="center red-text">{authError ? <p>{authError}</p> : null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
};

//const startLogin = () => {
//  return () => {
/*    var credential = firebase.auth.GoogleAuthProvider.credential(
      googleUser.getAuthResponse().id_token);

    var credential = firebase.auth.FacebookAuthProvider.credential(
      response.authResponse.accessToken);
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    var provider = new firebase.auth.TwitterAuthProvider();
    var provider = new firebase.auth.OAuthProvider('microsoft.com');
    var provider = new firebase.auth.OAuthProvider('yahoo.com');

        
    firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then(function(usercred) {
    var user = usercred.user;
      console.log("Anonymous account successfully upgraded", user);
    }, function(error) {
      console.log("Error upgrading anonymous account", error);
    });*/
//    var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//    return firebase.auth().signInWithPopup(googleAuthProvider);
//return firebase.auth().signInWithRedirect(githubAuthProvider);
//  };
//};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
