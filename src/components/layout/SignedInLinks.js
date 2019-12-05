import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/odds">Odds</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">My Bets</NavLink>
        </li>
        <li>
          <NavLink to="/create">My Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/create">Players Online</NavLink>
        </li>
        <li>
          <a href="/home" onClick={props.signOut}>
            Log Out
          </a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating blue lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
