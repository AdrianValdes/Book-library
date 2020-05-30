import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { auth } from '../../../configs/firebaseConfig';
import { connect } from 'react-redux';

const NavBar = ({ currentUser }) => {
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
      <Menu.Item>
        <Link to="/startPage">StartPage</Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/searchForm">Search</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signUp">Sign up</Link>
        </Menu.Item>

        {currentUser && currentUser ? (
          <Menu.Item>
            <div
              onClick={() =>
                auth.signOut().then(() => {
                  console.log('User signed out');
                })
              }
            >
              Sign out
            </div>
          </Menu.Item>
        ) : null}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(NavBar);
