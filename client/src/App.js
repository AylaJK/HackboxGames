import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';

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
    return (
      <div className={style.app}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Welcome to React</h1>
        </header>
        <p className={style.intro}>
          {this.state.response} <br />
          To get started, edit <code>client/src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
