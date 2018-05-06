import React from "react";
import style from "./searching.css";
export const Searching = () => {
    return (
        <div>
            <div className={style.loader}>
                <div className={style.cubeGrid}>
                    <div className={style.cube1}/>
                </div>
            </div>
            <div className={style.text}>
                Searching...
            </div>
        </div>
    );
};