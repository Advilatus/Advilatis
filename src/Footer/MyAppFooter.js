import React, { Component } from 'react';
import HeaderBarStyle from './MyAppFooter.css';
import {  Nav, NavItem, Navbar, MenuItem, NavDropdown  } from 'react-bootstrap';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class MyAppFooter extends Component {
	//BIND OBJ ET FONCTION
	constructor(props) {
		super(props);

	}

	handleSelect(selectedKey) {

	}

  render() {
    return (
	  <section>
		  <div>
				<h1>My App Footer</h1>
		  </div>
	  </section>
    );
  }
}

export default MyAppFooter;
