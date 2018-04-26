import React from "react";
import style from "./Profile.css";
import { Link } from "react-router-dom";
export class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            name: "",
        }
    }

    profileUpdate(name){
        this.setState({
            loggedIn: true,
            name: name,
        });
    }

    render() {
        if(this.state.loggedIn === false){
            return(
                <Link to="/login">
                    <button type="button" className={style.loginBtn}>Login</button>
                </Link>
            );
        }else{
            return(
                <div className={style.profile}>
                    <div className={style.name}>{this.state.name}</div>
                    <span className={style.icon}/>
                </div>
            );
        }
    };
}
