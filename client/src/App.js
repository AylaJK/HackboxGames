import React, { Component } from "react";
import style from "./App.css";
import { Main } from "./Main";
import { Header } from "./components/Header";

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
				<Header/>
				<Main/>
        <p className={style.intro}>
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
