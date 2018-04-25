import React from "react";
import {SocialSet} from "./SocialSet";
export class Header  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            name: "",
        }
    }

    headerUpdate(name){
        this.setState({
            loggedIn: true,
            name: name,
        });
    }

    render() {
        let button;
        if(this.state.loggedIn === false){
            button =
                <div>
                    <button type="button" className="btn btn-outline-success mar-right">Login</button>
                </div>
        }else{
            button =
                <div className="profile">
                    <div className="profile-name">
                        {this.state.name}
                    </div>
                    <span className="profile-icon fa fa-user"/>
                </div>
        }
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <SocialSet/>
                <div className="navbar-brand text-center flex-fill justify-content-center">Hackbox Games</div>
                {button}
            </nav>
        )};
}