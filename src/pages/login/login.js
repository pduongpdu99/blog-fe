import "./login.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Grid, Paper, styled } from "@mui/material";
import { COMMON_COLOR } from "utils/common";

const leftStyle = {
  background: COMMON_COLOR.PRIMARY,
  height: "100%",
  color: COMMON_COLOR.LIGHT,
};

const rightStyle = {
  background: COMMON_COLOR.DARK,
  height: "100%",
  color: COMMON_COLOR.LIGHT,
  textAlign: "center",
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-root">
        <Grid container spacing={2} style={{ height: "100%" }}>
          <Grid item xs={6}>
            <Item style={leftStyle}>left</Item>
          </Grid>
          <Grid item xs={6}>
            <Item style={rightStyle}>right</Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}
