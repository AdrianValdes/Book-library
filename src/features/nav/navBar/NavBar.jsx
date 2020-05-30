import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <Menu className="navBar" secondary>
      <Menu.Item>
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ height: '30px', width: '112' }}
          />
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/searchForm">Search</Link>
        </Menu.Item>
        {links}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
