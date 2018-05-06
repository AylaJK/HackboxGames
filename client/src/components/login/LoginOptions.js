import React from "react";
import style from "./Login.scss";
export class LoginOptions extends React.Component {
    render(){
        return(
            <div className={style.row}>
                <div className={style.inside}>
                    <div className={style.pad}>
                        <div className={style.left}>
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={this.props.onSubmit} id={"loginForm"}>
                            <div className={style.formGroup}>
                                <input type="email" className={"form-control"} id={"email"} placeholder={"Email"} required autoFocus/>
                            </div>
                            <div className="form-group">
                                <input type={"password"} className={"form-control"} id={"pwd"} placeholder={"Password"} required/>
                            </div>
                            <div className={style.formGroup + " form-check"}>
                                <input className="form-check-input" type="checkbox"/> Remember Me
                            </div>
                            {this.props.messagediv}
                            <button type="submit" className={style.createBtn} disabled={this.props.submitting}>Login</button>
                        </form>
                        <div className={style.left}>
                            <a href={""}>Forgot your Password? </a>
                        </div>
                    </div>
                </div>
                <div className={style.inside}>
                    <div className={style.pad}>
                        <div className={style.buttonDiv}>
                            <button className={[style.createBtn]} onClick={this.props.createUser}>Create a new Account</button>
                        </div>
                        <div className={style.buttonDiv}>
                            <button className={[style.discordBtn]} onClick={this.props.discord}>Login with Discord<span className={style.discordSpan}/></button>
                        </div>
                        <div className={style.buttonDiv}>
                            <button className={[style.facebookBtn]} onClick={this.props.facebook}>Login with Facebook<span className={style.facebookSpan}/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
