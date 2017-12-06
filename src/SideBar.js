import React, { Component } from 'react';
import './App.css';
import SideBarStyle from './SideBarStyle.css';

class SideBar extends Component {
  render() {
    return (
		<div className="sidenav">
		 <ul className="sidenav" role="tablist">
			<li className="Navigate"><a href="#">Home</a></li>
			<li className="Navigate"><a href="#">HTML</a></li>
			<li className="Navigate"><a href="#">CSS</a></li>
			<li className="Navigate"><a href="#">About</a></li>        
		  </ul>
		</div>
    );
  }
}

export default SideBar;
