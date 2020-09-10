import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav";
import IndexPage from "./view/index";
import AboutPage from "./view/about";
import JoinUSPage from "./view/joinUS";

function App() {
  return (
    <div>
      <Nav />
      <Route path={["/", "/index"]} exact component={IndexPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/joinUS" exact component={JoinUSPage} />
    </div>
  );
}

export default App;
