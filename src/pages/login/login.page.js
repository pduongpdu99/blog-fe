import "./login.page.css";
import React from "react";
import { SuccessButtonComponent } from "../../components/success-button/success-button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormControl from '@mui/material/FormControl';
import { FormHelperText, Input, InputLabel } from "@mui/material";
export class LoginPage extends React.Component {
  render() {
    return (
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <SuccessButtonComponent label="Đăng nhập" />

      </form>
    );
  }
}
