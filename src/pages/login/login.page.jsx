import "./login.page.css";
import React from "react";
import { SuccessButtonComponent } from "../../components/success-button/success-button.component.jsx";

export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <SuccessButtonComponent label="Đăng nhập" />
      </div>
    );
  }
}
