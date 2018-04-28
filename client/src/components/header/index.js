import React from "react";
import {SocialSet} from "./SocialSet";
import {Profile} from "./Profile";
import style from "./index.scss";
export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    headerUpdate(name){
      // TODO Pass through to Profile
    }

    render() {
        return(
            <header>
                <nav className={style.navbar}>
                    <div className={style.logo}>
                        <img src="https://picsum.photos/64?image=11" alt="logo"></img>
                        <span>Hackbox Games</span>
                    </div>
                    <div className={style.social}><SocialSet/></div>
                    <div className={style.profile}><Profile /></div>
                </nav>
            </header>
        )};
}
