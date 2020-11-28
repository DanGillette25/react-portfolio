import Portfolio from './portfolio';
import Home from "./main/index"
import Contact from "./contact/index"
import Footer from './footer/footer'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Dan Gillette</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  <Footer />
  </div>
  );
}

export default App;
