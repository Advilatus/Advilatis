import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './HeaderBarStyle.css';
import {  Nav, NavItem, Navbar, MenuItem, NavDropdown  } from 'react-bootstrap';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import NewRequest from "./NewRequest";
import MyRequests from "./MyRequests";
import MyAccount from "./MyAccount";

class HeaderApp extends Component {
	//BIND OBJ ET FONCTION
	constructor(props) {
		super(props);
		// console.log("SettingMenuSelection - INIT STATE HOME");
		this.state = {Menu: 'Home'};
		this.handleSelect=this.handleSelect.bind(this);
	}

	handleSelect(selectedKey) {
		this.setState({ Menu: selectedKey});
		console.log('SettingMenuSelection - UPDATE STATE', this.state.Menu);
	}

  render() {
    return (
	  <section>
		  <header>
				<h1>Notairius - Le notaire sympa</h1>
		  </header>
			<HashRouter>
				<div>
					<div className="topnav">
						<ul className="nav nav-tabs" role="tablist">
						<li><NavLink to="/"><a href="#">Home</a></NavLink></li>
						<li><NavLink to="/NewRequest"><a href="#">Nouvelle Demande</a></NavLink></li>
						<li><NavLink to="/MyRequests"><a href="#">Mes Demandes</a></NavLink></li>
						<li><NavLink to="/MyAccount"><a href="#">Mon Compte</a></NavLink></li>        
						</ul>
					</div>
					<div>
							<Route exact path="/" component={Home}/>
							<Route path="/NewRequest" component={NewRequest}/>
							<Route path="/MyRequests" component={MyRequests}/>
							<Route path="/MyAccount" component={MyAccount}/>
					</div>
				</div>
			</HashRouter>
	  </section>
    );
  }
}

export default HeaderApp;
