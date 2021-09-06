import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/pages/Home";
import Choice from "./Choice/pages/Choice";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/choice" exact>
          <Choice />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
