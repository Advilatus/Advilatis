import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBarStyle from './HeaderBarStyle.css';

class HeaderApp extends Component {
  render() {
    return (
	  <section className="MainSection">
		  <header>
				<h1>Notairius - Le notaire sympa</h1>
		  </header>
		  <div className="topnav">
			  <ul className="nav nav-tabs" role="tablist">
				<li className="active"><a href="#">Home</a></li>
				<li><a href="#">HTML</a></li>
				<li><a href="#">CSS</a></li>
				<li><a href="#">About</a></li>        
			  </ul>
		  </div>
	  </section>
    );
  }
}

export default HeaderApp;
