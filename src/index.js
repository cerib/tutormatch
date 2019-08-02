import React from "react";
import ReactDOM from "react-dom";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Other from "./Components/Other/other";

const routing = (
  <Router>
    {/* <div id="routing-container"> */}
    <Route exact path="/" component={Homepage} />
    <Route path="/other" component={Other} />
    {/* </div> */}
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
