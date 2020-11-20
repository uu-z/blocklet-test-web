import React from "react";
import { useObserver } from "mobx-react-lite";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./pages";
import "antd/dist/antd.css";

const App = () => {
  return useObserver(() => (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  ));
};

export default App;
