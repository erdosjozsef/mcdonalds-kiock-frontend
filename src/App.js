import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/pages/Home";
import Choice from "./Choice/pages/Choice";
import Order from "./Order/pages/Order";
import Cart from "./Cart/components/Cart";
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
        <Route path="/order" exact>
          <Order />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
