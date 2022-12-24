import "./App.css";

import React, { Fragment } from "react";
import { HeaderComponent } from "./components/header/header.component.jsx";
import { FooterComponent } from "./components/footer/footer.component.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerConfig } from "./route.config.jsx";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent />

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

        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
