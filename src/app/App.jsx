import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';

import HomePage from '../features/home/HomePage';
import SearchForm from '../features/search/SearchForm';
import NavBar from '../features/nav/navBar/NavBar';
import StartPage from '../features/startPage/StartPage';
import SignIn from '../features/nav/authMenus/SignIn';
import SignUp from '../features/nav/authMenus/SignUp';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <NavBar />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/searchForm" component={SearchForm} />
            <Route path="/startPage" component={StartPage} />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
}
export default App;
