import React from "react";
import {SocialSet} from "./SocialSet";
import style from "./Header.css";
export class Header  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            name: "",
        }
    }

    render() {
        let button;
        if(this.state.loggedIn === false){
            button =
                <div>
                    <button type="button" className={style.loginBtn}>Login</button>
                </div>
        }else{
            button =
                <div className={style.profile}>
                    <div className={style.name}>
                        {this.state.name}
                    </div>
                    <span className={style.icon}/>
                </div>
        }
        return(
            <nav className={style.navbar}>
                <SocialSet/>
                <div className={style.branding}>Hackbox Games</div>
                {button}
            </nav>
        )};
}
