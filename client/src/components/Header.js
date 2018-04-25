import React from "react";
import {SocialSet} from "./SocialSet";
import style from "./Header.css";
export class Header  extends React.Component {
    render() {
        let button;
        if(this.props.user.name === "null"){
            button =
                <div>
                    <button type="button" className={style.loginBtn}>Login</button>
                </div>
        }else{
            button =
                <div className={style.profile}>
                    <div className={style.name}>
                        {this.props.user.name}
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
