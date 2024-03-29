import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

//import "../auth/Login.css";
//import "../auth/InputBox.css";

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/dashboard');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <div className="box">
          <h2>Place a Bet</h2>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input type="text" id="title" onChange={this.handleChange} />
                <label htmlFor="title">Team</label>
              </div>
              <div className="input-field">
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="content">Type</label>
              </div>
              <div className="input-field">
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="content">Wager</label>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
