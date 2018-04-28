import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import style from "./Main.css";

export class Main extends Component {
  render(){
		return(
      <main className={style.main} id="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </main>
		);
  }
};

