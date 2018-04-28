import React from "react";
import style from "./Login.css";
export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
        }
    }
    login(e){
        e.preventDefault();
        // TODO Form validation //
        // Send form to server //
        // Disable client form //
        this.serverMessage("thinking")
    }
    serverMessage(msg){
        this.setState({
            message: msg,
        });
    }
    render() {
        let messageDiv;
        if(this.state.message === "thinking"){
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
        return (
            <div className={style.wrapper}>
                <div className={style.contain}>
                    <div className={style.row}>
                        <div className={style.inside}>
                            <div className={style.left}>
                                <h2>Login</h2>
                            </div>
                            <form onSubmit={this.login.bind(this)}>
                                <div className={style.formGroup}>
                                    <input type="email" className={"form-control"} id={"email"} placeholder={"Email"}/>
                                </div>
                                <div className="form-group">
                                    <input type={"password"} className={"form-control"} id={"pwd"} placeholder={"Password"}/>
                                </div>
                                <div className={style.formGroup + " form-check"}>
                                        <input className="form-check-input" type="checkbox"/> Remember Me
                                </div>
                                {messageDiv}
                                <button type="submit" className={"btn btn-outline-dark btn-lg"}>Login</button>
                            </form>

                        </div>
                        <div className={style.inside}>
                            <p>Login with Social Account</p>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        Don't have an Account?
                        <button>Create An Account</button>
                    </div>
                </div>

            </div>
        );
    };
}
