import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
// Load Top and side bar
import HeaderApp from './HeaderApp';
import SideBar from './SideBar';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {  Popover, Tooltip, OverlayTrigger, Modal, Button  } from 'react-bootstrap';
var createReactClass = require('create-react-class');
// import { Modal } from 'react-bootstrap';

class RequestButton extends Component {
   constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
	this.handleClick = this.handleClick.bind(this);
	this.doParentToggle= this.doParentToggle.bind(this);
  }
  handleClick() {
	console.log("ClickRequest");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  doParentToggle(){
    console.log("hello");
	this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
   }
  render() {
    return (
		<section id="MainApp"className="AlistTable">
			<button type="button" className="btn btn-primary btn-lg btn-block MainButton" onClick={this.handleClick}>
				Faire une nouvelle demande
			</button>
			<button>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
			{this.state.isToggleOn ? <MyModalViewForRequestCreation ValueToTest='fdsfdsfdsf' parentToggle={this.doParentToggle}/> : null }
		</section>
    );
  }
}

class MyModalViewForRequestCreation extends Component {
  //BIND OBJ ET FONCTION
  constructor(props) {
    super(props);
	console.log("BuildModal");
    this.state = {showModal: true, isvisible: true};

	// this.ValueToTest ='Yahooo'
	this.close = this.close.bind(this);
	this.open = this.open.bind(this);
	this.props.parentToggle.bind(this);
  }
  // getInitialState() {
    // return { showModal: false };
  // }

  close() {
	console.log("CloseModal");
    this.setState({ showModal: false });
	// this.props.parentToggle.bind(this);
	// {this.props.parentToggle.bind(this)};
	this.props.parentToggle();
  }

  open() {
    this.setState({ showModal: true });
	this.setState({ isvisible: true });

  }

  render() {
	const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading {this.props.ValueToTest}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />
		  </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}


class Example extends Component {
  //BIND OBJ ET FONCTION
  constructor(props) {
    super(props);
    this.state = {showModal: false};

	// this.ValueToTest ='Yahooo'
	this.close = this.close.bind(this);
	this.open = this.open.bind(this);
  }
  // getInitialState() {
    // return { showModal: false };
  // }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading {this.ValueToTest}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />
		  </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
		<HeaderApp/>
		<SideBar/>
		<RequestButton/>
		<Example/>
      </div>
    );
  }
}

export default App;
