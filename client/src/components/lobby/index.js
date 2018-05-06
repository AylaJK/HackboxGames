import React from "react";
import style from "./Lobby.scss";
import {LobbyHeader} from "./LobbyHeader";
import {PlayerList} from "./PlayerList";
import {ReadyUp} from "./ReadyUp";
import {Searching} from "./Searching";

export class Lobby extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            gameName: "Carbs Against Humility",
            gameState: "searching",
            players: [{id: "1", name: "Austin", status:"ready"}, {id: "2", name:"Bishop", status:"ready"}, {id:"3", name: "unknown", status:"!ready"}, {id:"4", name: "unknown", status:"searching"}, {id:"5", name: "unknown", status:"searching"}, {id:"6", name: "unknown", status:"searching"}],
        }
    }
    render(){
        let center;
        if(this.state.gameState === "lobby"){
            center = (<ReadyUp/>);
        }else if(this.state.gameState === "searching"){
            center = (<Searching/>);
        }
        return (
            <div className={style.wrapper}>
                    <div className={"row"}>
                        <LobbyHeader name={this.state.gameName} gameState={this.state.gameState}/>
                    </div>
                    <div className={style.main}>
                        {center}
                    </div>
                    <PlayerList players={this.state.players}/>
            </div>
        );
    }
}
