import React from "react";
import style from "./lobbyParts/Lobby.css";
import {LobbyHeader} from "./lobbyParts/LobbyHeader";
import {PlayerList} from "./lobbyParts/PlayerList";
export class Lobby extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            gameName: "Carbs Against Humility",
            gameState: "Game",
            players: [{id: "1", name: "Austin", status:"ready"}, {id: "2", name:"Bishop", status:"ready"}, {id:"3", name: "unknown", status:"!ready"}, {id:"4", name: "unknown", status:"searching"}, {id:"5", name: "unknown", status:"searching"}, {id:"6", name: "unknown", status:"searching"}],
        }
    }
    render(){
        return (
            <div className={style.wrapper}>
                    <div className={"row"}>
                        <LobbyHeader name={this.state.gameName} gameState={this.state.gameState}/>
                    </div>
                    <div className={style.main}>
                        <div className={style.ready}>
                            <div className={style.fields}>
                                <input type="text" className={"form-control"} id={"nickName"} placeholder={"Select a Nickname"} autoFocus/>
                            </div>
                            <button className={"btn btn-success"}> Ready up</button>
                        </div>
                    </div>
                    <PlayerList players={this.state.players}/>
            </div>
        );
    }
}
