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
                        <form onSubmit={this.props.onSubmit} id="loginForm">
                            <div className={style.formGroup}>
                                <input type="email" className={style.formControl} name="email" placeholder="Email" required autoFocus/>
                            </div>
                            <div className={style.formGroup}>
                                <input type="password" className={style.formControl} name="pwd" placeholder="Password" required/>
                            </div>
                            <div className={style.formGroupCheck}>
                                <input className="form-check-input" type="checkbox" name="remember" id="rememberme"/><label for="rememberme">Remember Me</label>
                            </div>
                            {this.props.messagediv}
                            <button type="submit" className={style.createBtn} disabled={this.props.submitting}>Login</button>
                        </form>
                        <div className={style.left}>
                            <a href="#">Forgot your Password? </a>
                        </div>
                    </div>
                </div>
                <div className={style.inside}>
                    <div className={style.pad}>
                        <div className={style.buttonDiv}>
                            <button className={style.createBtn} onClick={this.props.createUser}>Create a new Account</button>
                        </div>
                        <div className={style.buttonDiv}>
                            <button className={style.discordBtn} onClick={this.props.discord}>Login with Discord<span className={style.discordSpan}/></button>
                        </div>
                        <div className={style.buttonDiv}>
                            <button className={style.facebookBtn} onClick={this.props.facebook}>Login with Facebook<span className={style.facebookSpan}/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
