import React from 'react'
import {Users, Dashboard} from "./pages";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
