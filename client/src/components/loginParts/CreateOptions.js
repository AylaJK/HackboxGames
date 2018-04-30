import React from "react";
import style from "./Login.css";
export class CreateOptions extends React.Component {
    render(){
        return(
            <div className={style.row}>
                <div className={style.inside}>
                    <div className={style.pad}>
                        <div className={style.left}>
                            <h2>Welcome to the Hackbox Community</h2>
                        </div>
                        <form onSubmit={this.props.onSubmit} id={"loginForm"}>
                            <div className={style.formGroup}>
                                <input type="email" className={"form-control"} id={"email"} placeholder={"Enter your email"} required autoFocus/>
                            </div>
                            <div className="form-group">
                                <input type={"password"} className={"form-control"} id={"pwd"} placeholder={"Enter Password"} required/>
                            </div>
                            <div className="form-group">
                                <input type={"password"} className={"form-control"} id={"pwd"} placeholder={"Confirm Password"} required/>
                            </div>
                            {this.props.messagediv}
                            <button type="submit" className={style.createBtn} disabled={this.props.submitting}>Create Account</button>
                        </form>
                        <div className={style.arrow} onClick={this.props.login}>
                            <span className={"fa fa-arrow-left"}/><p>Back to Login</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}