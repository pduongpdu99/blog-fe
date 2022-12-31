import "./App.css";

import React, { Fragment } from "react";
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerConfig } from "./route.config";
import { createBrowserHistory } from "history";
import NO_HEADER_FOOTER_PATH from "utils/path";

class App extends React.Component {
  history = createBrowserHistory();
  isLoginPage = this.history.location.pathname.includes(
    NO_HEADER_FOOTER_PATH.LOGIN_PATH
  );

  render() {
    return (
      <Fragment>
        {!this.isLoginPage ? <HeaderComponent /> : <></>}

        <BrowserRouter>
          <Routes>
            <Route path="/">
              {routerConfig.map((route, index) => {
                return route.path.length === 0 ? (
                  <Route index element={route.element} key={index} />
                ) : (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={index}
                  />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>

        {!this.isLoginPage ? <FooterComponent /> : <></>}
      </Fragment>
    );
  }
}

export default App;
