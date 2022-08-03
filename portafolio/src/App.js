import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/Inicio';
import Bla from './components/pseint';

import User from './components/java';
import Nav from 'react-bootstrap/Nav'
function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">Inicio</Link>
        <Link to="/pseint" className="btn btn-dark">Pseint</Link>
        <NavLink to="/java" className="btn btn-dark" activeClassName="active">Java</NavLink>
      </div>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/pseint">
          <Bla />
        </Route>
        <Route path="/java" exact>
          <User />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
