import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SingInModal from '../authMenus/SingInModal';

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Menu.Item>
        <NavLink to="/signup">Signup</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/signin">Login</NavLink>
      </Menu.Item>
      <Menu.Item>
        <SingInModal />
      </Menu.Item>
    </React.Fragment>
  );
};

export default SignedOutLinks;
