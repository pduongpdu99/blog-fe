import "./success-button.component.css";
import React from "react";
import { Button } from "@mui/material";

export class SuccessButtonComponent extends React.Component {
  nameDefault = "Click";
  count = 0;

  constructor(props) {
    super();
    if (props.label) this.nameDefault = props.label;

    this.state = { count: this.count };
  }

  sayHello(count) {
    this.setState({ count: count});
  }

  render() {
    return (
      <Button
        variant="contained"
        color="success"
       >
        {this.nameDefault} {this.state.count}
      </Button>
    );
  }
}
