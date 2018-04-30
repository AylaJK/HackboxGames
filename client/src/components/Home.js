import React from "react";
import style from "./homeParts/Home.css";
import {Panel} from "./homeParts/Panel"
export const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.panelBox}>
                <Panel name={"Carbs Against Humility"} order={1} active={false}/>
                <Panel name={"Fakegage"} order={2} active={true}/>
                <Panel name={"QuickHash"} order={3} active={false}/>
            </div>
        </div>
    );
};
