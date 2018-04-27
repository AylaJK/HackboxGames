import React from "react";
import style from "./Home.css";
import {Panel} from "./Panel"
export const Home = () => {
    return (
        <div className="fillScreen">
            <div className={style.panelBox}>
                <Panel name="Game A" order={1}/>
                <Panel name="Game B" order={2}/>
                <Panel name="Game C" order={3}/>
                <Panel name="Game D" order={4}/>
            </div>
        </div>
    );
};
