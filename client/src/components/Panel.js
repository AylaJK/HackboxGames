import React from "react";
import style from "./Home.css";
export class Panel  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            hover: false,
            background: "#5C6976",
        }
    }
    hoverOn(){
        this.setState({
            hover: true,
            background: "darkorange",
        });
    }
    hoverOff(){
        this.setState({
            hover: false,
            background: "#5C6976",
        });
    }
    render() {
        let btnDiv;
        if(this.props.active === false){
            if(this.state.hover === true){
                btnDiv = (
                    <div className={style.buttons}>
                        <button className={style.constructionBtn}>Under Construction Check Back Soon</button>
                    </div>
                )
            }else{
                btnDiv = (
                    <div className={style.buttons}>
                        <button className={style.normalBtn}>Under Construction Check Back Soon</button>
                    </div>
                );
            }
        }else if (this.state.loggedIn === false) {
            if (this.state.hover === true) {
                btnDiv = (
                    <div className={style.buttons}>
                        <button className={style.joinBtn}>Search for Public Lobby</button>
                    </div>
                );
            }else{
                btnDiv = (
                    <div className={style.buttons}>
                        <button className={style.normalBtn}>Search for Public Lobby</button>
                    </div>
                )
            }
        } else if (this.state.loggedIn === true){
            if(this.state.hover === true){
                btnDiv = (
                    <div className={style.buttons}>
                        <div className={style.btnDiv}>
                            <button className={style.joinBtn}>Search for Public Lobby</button>
                        </div>
                        <div className={style.btnDiv}>
                            <button className={style.createBtn}>Create Private Lobby</button>
                        </div>
                    </div>
                );
            }else{
                btnDiv = (
                    <div className={style.buttons}>
                        <div className={style.btnDiv}>
                            <button className={style.normalBtn}>Search for Public Lobby</button>
                        </div>
                        <div className={style.btnDiv}>
                            <button className={style.normalBtn}>Create Private Lobby</button>
                        </div>
                    </div>
                );
            }
        }


        return (
            <div style={{order : this.props.order}} className={style.panel} onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}>
                <div className={style.innerPanel}>
                    <div className={style.accent} style={{backgroundColor: this.state.background}}/>
                    <div className={style.gameText}>
                        <h1>{this.props.name}</h1>
                    </div>
                    {btnDiv}
                    <div className={style.accent} style={{backgroundColor: this.state.background}}/>
                </div>
            </div>
        );
    }
}