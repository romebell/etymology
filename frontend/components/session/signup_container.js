import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log in instead</Link>
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    signup: user => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)