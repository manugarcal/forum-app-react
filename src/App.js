import React from "react";
import injectContext from "./store/appContext";
import { BrowserRouter, Switch,Route, } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/home";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
