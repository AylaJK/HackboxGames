import React from "react";
import style from "./loginParts/Login.css";
import {LoginOptions} from "./loginParts/LoginOptions";
import {CreateOptions} from "./loginParts/CreateOptions";

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            submitting: false,
            loginOptions: true,
        }
    }
    // Method called when someone enters Native Login credentials //
    loginCredentials(e){
        e.preventDefault();
        // TODO Form Sanitization //
        // Send form to server //
        this.setState({
            submitting: true,
        });
        this.serverMessage("thinking")
    }
    // Method called when someone attempts to create a new user //
    createUser(e){
        e.preventDefault();
        // TODO Form Sanitization //
        // Send form to server //
        this.setState({
            submitting: true,
        });
        this.serverMessage("thinking")
    }
    // Method called when someone attempts facebook loginParts
    loginViaFacebook(){
        console.log("Logging in via Facebook");
    }
    loginViaDiscord(){
        console.log("Logging in via Discord");
    }

    // Method called whenever the server has something to tell the client //
    serverMessage(msg){
        this.setState({
            message: msg,
        });
    }

    // Called to navigate to create user form and back when needed //
    toggleLoginOptions (){
        console.log("calling this");
        this.setState({
           loginOptions: !this.state.loginOptions,
        });
    }

    render() {
        let messageDiv;
        let options;
        if(this.state.submitting === true){
            messageDiv = (
                <div className={style.loadingPad}>
                    <div className={style.loader}/>
                </div>
            );
        }else if (this.state.message === ""){
            messageDiv = (
                <div className={style.warningSpace}>
                    <p>hello</p>
                </div>
            );
        }else{
            messageDiv = (
                <div className={style.warning}>
                    <p>{this.state.message}</p>
                </div>);
        }
        if(this.state.loginOptions === true){
            options =(
                <LoginOptions messagediv={messageDiv} submitting={this.state.submitting} onSubmit = {this.loginCredentials.bind(this)} createUser={this.toggleLoginOptions.bind(this)} facebook={this.loginViaFacebook.bind(this)} discord={this.loginViaDiscord.bind(this)}/>
            );
        }else{
            options =(
                <CreateOptions messagediv={messageDiv} submitting={this.state.submitting} onSubmit ={this.createUser.bind(this)} login={this.toggleLoginOptions.bind(this)}/>
            );
        }
        return (
            <div className={style.wrapper}>
                <div className={style.contain}>
                    {options}
                </div>
            </div>
        );
    };
}
