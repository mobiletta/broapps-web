import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import VideoBg from 'reactjs-videobg';
//import webm from '../../media/Vegas.webm';
//import mp4 from '../../media/Vegas.mp4';
//import poster from '../../media/Vegas_First_Frame.png';
//import { GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import 'firebase/auth';

class Home extends Component {
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
    return (
      <div className="container">
        <div className="background-video">
          <VideoBg poster="https://bro-media.s3.amazonaws.com/images/aeriallv-poster.png">
            <VideoBg.Source src="https://bro-media.s3.amazonaws.com/static-video/media.io_media.io_4k-aerial-of-las-vegas-strip-at-night_bnmzkfl2__D.webm" type="video/webm" />
            <VideoBg.Source src="https://bro-media.s3.amazonaws.com/static-video/media.io_4k-aerial-of-las-vegas-strip-at-night_bnmzkfl2__D.mp4" type="video/mp4" />
          </VideoBg>
        </div>
      </div>
    );
  }
}

/* // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
}; */

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
