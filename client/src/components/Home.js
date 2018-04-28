import React from "react";
import style from "./Home.css";
import {Panel} from "./Panel"
export const Home = () => {
    return (
        <div className={style.fillScreen}>
            <div className={style.panelBox}>
                <Panel name={"Carbs Against Humility"} order={1} active={false}/>
                <Panel name={"Fakegage"} order={2} active={true}/>
                <Panel name={"QuickHash"} order={3} active={false}/>
            </div>
        </div>
    );
};