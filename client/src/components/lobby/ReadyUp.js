import React from "react";
import style from "./Lobby.scss";
export const ReadyUp = () => {
    return (
        <div className={style.ready}>
            <div className={style.fields}>
                <input type="text" className={"form-control"} id={"nickName"} placeholder={"Select a Nickname"} autoFocus/>
            </div>
            <button className={"btn btn-success"}> Ready up</button>
        </div>
    );
};
