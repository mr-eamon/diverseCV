import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Upload from "./upload";
import Review from "./review";
import 'react-web-tabs/dist/react-web-tabs.css';
import './style.css';

const App = () => (
  <Fragment>
    <NavBar />
  </Fragment>
);

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li class="nameNavBar">DiverseCV</li>
            <li><NavLink to="/upload">Upload</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
          </ul>

          <div className="content">
            <Route path="/review" component={Review} />
            <Route path="/upload" component={Upload} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById('rootIndex'));
