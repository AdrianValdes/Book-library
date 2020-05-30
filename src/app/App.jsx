import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';

import HomePage from '../features/home/HomePage';
import SearchForm from '../features/search/SearchForm';
import NavBar from '../features/nav/navBar/NavBar';
import StartPage from '../features/startPage/StartPage';
import { connect } from 'react-redux';
import Login from '../features/nav/Menus/Login';
import SignUp from '../features/nav/Menus/SignUp';
import { auth } from '../configs/firebaseConfig';
import { setCurrentUser, clearCurrentUser } from '../redux/auth/authActions';

function App({ currentUser, setCurrentUser, clearCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        // if user exists set the current user
        setCurrentUser(user);
      } else {
        //if the user doesn't exist clear the current user
        clearCurrentUser();
      }
    });

    return () => unsubscribeFromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);
  console.log(currentUser);
  return (
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <NavBar />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/searchForm" component={SearchForm} />
            <Route path="/startPage" component={StartPage} />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
