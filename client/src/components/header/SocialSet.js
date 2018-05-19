import React from "react";
import style from "./SocialSet.scss";
export const SocialSet = (props) => {
    return (
        <div className={style.socialSet}>
            <a href="#" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"/></a>
            <a href="https://github.com/AylaJK/HackboxGames" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><span className="fab fa-discord"/></a>
        </div>
    );
};
