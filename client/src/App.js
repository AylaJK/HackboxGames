import React, { Component } from 'react';
//import logo from './logo.svg';
import style from './App.css';
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends Component {
	state = {
    response: ''
  };

  componentDidMount() {
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
      let user = {
        name: "Austin Wattling",
      };
    return (
      <div className={style.app}>
          <Header user={user}/>
          <Home/>
        <p className={style.intro}>
          {this.state.response} <br />
        </p>
      </div>
    );
  }
}

export default App;
