import React from "react";
import style from "./LobbyHeader.css";
export class LobbyHeader extends React.Component {
    render(){
        let btn;
        if (this.props.gameState === "Searching"){
            btn = (
                <button className={"btn btn-outline-danger btn-lg"}>Stop Searching</button>
                )
        }else{
            btn = (
                <button className={"btn btn-outline-danger btn-lg"}>Leave Lobby</button>
            )
        }
        return (
            <div className={style.gameHead}>
                <div className={"col"}/>
                <div className={"col"}>
                    <h1>{this.props.name}</h1>
                </div>
                <div className={style.leaveBtn}>
                    {btn}
                </div>
            </div>
        );
    }
}