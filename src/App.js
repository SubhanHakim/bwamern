import React from "react";
import "assets/scss/style.scss";
import { Route, Router, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
