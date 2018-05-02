import React from "react";
import style from "./PlayerList.css";
export class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players,
        }
    }
    render() {
        let returnList = [];
        for(let player of this.state.players){
            if(player.status === "ready"){
                returnList.push(
                    <div className={"col"} key={player.id}>
                        <span className={style.playerReady}/>
                        <p><i>{player.name}</i></p>
                    </div>
                );
            }else if (player.status === "!ready"){
                returnList.push(
                    <div className={"col"} key={player.id}>
                        <span className={style.playerNotReady}/>
                        <p><i>Player not Ready</i></p>
                    </div>
                );
            }else{
                returnList.push(
                    <div className={"col"} key={player.id}>
                        <span className={style.lookingPlayer}/>
                        <p><i>Looking for Player</i></p>
                    </div>
                );
            }
        }
        return (
            <div className={style.playerList}>
                <div className={"row"}>
                    {returnList}
                </div>
            </div>
        );
    }
}