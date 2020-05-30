import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';
import { Menu } from 'semantic-ui-react';

const SignedInLinks = (props) => {
  return (
    <React.Fragment>
      <Menu.Item onClick={props.signOut}>Log Out</Menu.Item>
      <Menu.Item>
        <NavLink to="/startPage">{props.profile.initials}</NavLink>
      </Menu.Item>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
