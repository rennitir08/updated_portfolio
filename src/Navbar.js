import React, { Component } from 'react';
import { Nav,Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './Navbar.css';

class App extends Component {
  render() {
    return (
        <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Jennifer Bonner</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#" className="grow">
              Projects
            </NavItem>
            <NavItem eventKey={2} href="#" className="grow">
              Resume
            </NavItem>
            <NavItem eventKey={3} href="#" className="grow">
              Contact Me
            </NavItem>              
          </Nav>
        </Navbar>;
        </div>
    );
  }
}

export default App;