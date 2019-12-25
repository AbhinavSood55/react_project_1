import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Prompt, Redirect } from 'react-router-dom';
import './App.css';
import Home from './subcomponents/home';
import Refs_Doms from './subcomponents/refs_doms/refs_doms';
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    //Github practice
    return (
      <Fragment>
        <Navbar  variant="dark"  bg="primary" expand="lg" sticky="top" >
          <Navbar.Brand href="/" >React Project</Navbar.Brand>
          <Nav>
            <Nav.Link href="/refs_doms"> Refs & Doms</Nav.Link>
          </Nav>
        </Navbar>
        <Router>
          <Route path="/" exact strict component={Home}/>
          <Route path="/refs_doms" exact strict component={Refs_Doms}/>
        </Router>
      </Fragment>
    );
  }
}
 
export default App;