import React, { Component } from "react";
import {  
  Popover, 
  Tooltip, 
  OverlayTrigger, 
  Modal, 
  Button,
  Checkbox,
  Radio,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import {LabelForRequestCreationForm, FieldGroupAsBite} from "./NewRequest";
// import {FieldGroup} from "./NewRequest";
import './NewRequest.css';
import './style.css';

class MyAccount extends React.Component {
 render() {
  // function FieldGroup({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel className="MYControlLabel">{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );}
   return (
      <div className="panel-body">
       <h2>MyAccount</h2>
       {/* <FieldGroup id="Test ID" type="text" label="Enter Name"placeholder="LAST NAME First Name"/> */}
       <Button  bsStyle="success RequestBut" type="submit" onClick={this.handleSubmitClick}>
         Send
       </Button>
       {/* {this.FieldGroup("Tata","Age","") } */}
       <div>
         <h6> Test </h6>
         {/* <LabelForRequestCreationForm value="tasoeurbernie"/> */}
         <FieldGroupAsBite id="formControlsText" type="text" label="Autre Champs" placeholder="Enter text"/>
         <FieldGroupAsBite
                id="formControlsFile"
                type="file"
                label="File"
                help="Example block-level help text here."
                />
        </div>
      </div>
    );
  }
}

export default MyAccount