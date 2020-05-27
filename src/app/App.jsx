import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';

import HomePage from '../features/home/HomePage';
import SearchForm from '../features/search/SearchForm';
import NavBar from '../features/nav/navBar/NavBar';
import StartPage from '../features/startPage/StartPage';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <React.Fragment>
            <NavBar />
            <div className="main">
              <Route path="/searchForm" component={SearchForm} />
              <Route path="/startPage" component={StartPage} />
            </div>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
}

export default App;
