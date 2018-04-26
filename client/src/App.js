import React, { Component } from "react";
import style from "./App.css";
import { Main } from "./Main";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { subscribeToTimer } from './socket';

class App extends Component {
  state = {
    response: 'Server RESTful Test',
    timestamp: 'Server Socket Test',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
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
          {this.state.response} <br />
          {this.state.timestamp}
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
