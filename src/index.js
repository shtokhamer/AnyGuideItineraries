import React from "react";
import ReactDOM from "react-dom";
import FormGroup from "react-bootstrap";
import FormControl from "react-bootstrap";
import ControlLabel from "react-bootstrap";
import HelpBlock from "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
