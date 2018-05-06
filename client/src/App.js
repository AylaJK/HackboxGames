import React, { Component } from "react";
import style from "./App.scss";
import { Main } from "./Main";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import io from "socket.io-client";
const socket = io();

class App extends Component {
  state = {
    response: 'Server RESTful Test',
    timestamp: 'Server Socket Test',
  };

  componentDidMount() {
    this.callApi()
      .then(res => console.log('REST Test: ', res))
      .catch(err => console.log('REST Test: ', err));
    this.callSocket();
  }

  callApi = async () => {
    const response = await fetch('/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callSocket = () => {
      socket.on ('hello', res => console.log('Websocket Test: ', res));
      socket.emit('hello', {});
  };

  render() {
    return (
      <div className={style.app}>
        <Header/>
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
