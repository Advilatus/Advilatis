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
import './NewRequest.css';
import './style.css';

export class LabelForRequestCreationForm extends Component {
    render() {
        return (
            <label>{this.props.value}</label>
            // <label>Hello bernie</label>
        );
      }
 } 
// module.export = LabelForRequestCreationForm;

export class FieldGroupAsBite extends Component {
  render () {
    return(
      <FormGroup controlId={this.id}>
      <ControlLabel className="MYControlLabel">{this.props.label}</ControlLabel>
      <FormControl {...this.props} />
      {this.help && <HelpBlock>{this.help}</HelpBlock>}
      </FormGroup>
    );
  }
}

class SimpleInput extends Component {
    render() {
        return (
            <input type="text" name="user" className="form-control" required/>
        );
      }
 } 

class NewRequestForm extends Component {
   constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    // This binding is necessary to make `this` work in the callback
	  this.handleClick = this.handleClick.bind(this);
      this.doParentToggle= this.doParentToggle.bind(this);
  }


  CreateFormDivision(i) {
    return ( 
        <div className="form-group">
            <LabelForRequestCreationForm value={i} />
            <SimpleInput/>
        </div>
    );
  }

  FieldGroup( id, label, help, ...props ) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel className="MYControlLabel">{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
    }

  handleClick() {
	  console.log("ClickRequest");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleSubmitClick() {
    alert(`Submit Form activated!`);
  }

  doParentToggle(){
    console.log("hello");
	  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id}>
            <ControlLabel className="MYControlLabel">{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
    }
    return (
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title pull-left">Contact Form</h3>
                </div>
                <div className="panel-body">
                    <div className="form-horizontal">
                        {this.CreateFormDivision('Demandeur')}
                        {this.CreateFormDivision('Titre de la demande')}
                        {this.FieldGroup("formControlsText","Titre de la demande","") }
                        <FieldGroup id="formControlsText" type="text" label="Autre Champs"placeholder="Enter text"/>
                        <Button  bsStyle="success RequestBut" type="submit" onClick={this.handleSubmitClick}>
                          Envoyé
                        </Button>
                    </div>
                </div>

            </div>    
            // <form>
            //     <Modal.Header>
            //         <Modal.Title>Nouvelle Demande</Modal.Title>
            //     </Modal.Header>
            //     <FieldGroup
            //     id="formControlsEmail"
            //     type="email"
            //     label="Email address"
            //     placeholder="Enter email"
            //     />
            //     <FieldGroup
            //     id="formControlsPassword"
            //     label="Password"
            //     type="password"
            //     />
                // <FieldGroup
                // id="formControlsFile"
                // type="file"
                // label="File"
                // help="Example block-level help text here."
                // />

            //     <Checkbox checked readOnly>
            //     Checkbox
            //     </Checkbox>
            //     <Radio checked readOnly>
            //     Radio
            //     </Radio>

            //     <FormGroup>
            //     <Checkbox inline>
            //         1
            //     </Checkbox>
            //     {' '}
            //     <Checkbox inline>
            //         2
            //     </Checkbox>
            //     {' '}
            //     <Checkbox inline>
            //         3
            //     </Checkbox>
            //     </FormGroup>
            //     <FormGroup>
            //     <Radio name="radioGroup" inline>
            //         1
            //     </Radio>
            //     {' '}
            //     <Radio name="radioGroup" inline>
            //         2
            //     </Radio>
            //     {' '}
            //     <Radio name="radioGroup" inline>
            //         3
            //     </Radio>
            //     </FormGroup>

            //     <FormGroup controlId="formControlsSelect">
            //     <ControlLabel>Select</ControlLabel>
            //     <FormControl componentClass="select" placeholder="select">
            //         <option value="select">select</option>
            //         <option value="other">...</option>
            //     </FormControl>
            //     </FormGroup>
            //     <FormGroup controlId="formControlsSelectMultiple">
            //     <ControlLabel>Multiple select</ControlLabel>
            //     <FormControl componentClass="select" multiple>
            //         <option value="select">select (multiple)</option>
            //         <option value="other">...</option>
            //     </FormControl>
            //     </FormGroup>

            //     <FormGroup controlId="formControlsTextarea">
            //     <ControlLabel>Textarea</ControlLabel>
            //     <FormControl componentClass="textarea" placeholder="textarea" />
            //     </FormGroup>

            //     <FormGroup>
            //     <ControlLabel>Static text</ControlLabel>
            //     <FormControl.Static>
            //         email@example.com
            //     </FormControl.Static>
            //     </FormGroup>

            //     <Button type="submit">
            //     Submit
            //     </Button>
            // </form>
    );
  }
}


class NewRequest extends React.Component {
 render() {
   return (
     <NewRequestForm />
   );
 }
}

export default NewRequest