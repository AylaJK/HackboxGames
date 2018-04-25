import React, { Component } from "react";
import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Header} from "./components/Header";
class App extends Component {
	state = {
    response: ''
  };

  /*componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
          <Header/>
          <Home/>
        <p className="App-intro">
          {this.state.response} <br />
        </p>
      </div>
    );
  }*/
  render(){
      return(
          <Router>
              <div>
                <Route path={"/"} component={Header}/>
                <Route exact path={"/"} component ={Home}/>
                <Route path={"/home"} component={Home}/>
                <Route path={"/login"} component={Login}/>
              </div>
          </Router>
      );
  }
}

export default App;
