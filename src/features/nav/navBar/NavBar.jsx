import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
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

        <Menu.Item name="Login" />
        <Menu.Item name="Sign up" />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
