import React from "react";
import style from "./SocialSet.css";
export const SocialSet = (props) => {
    return (
        <div className={style.socialSet}>
            <span className="fab fa-facebook"/>
            <a href="https://github.com/AylaJK/HackboxGames"><span className="fab fa-github"/></a>
            <span className="fab fa-discord"/>
        </div>
    );
};
