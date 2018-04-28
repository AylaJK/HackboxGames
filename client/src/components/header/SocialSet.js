import React from "react";
import style from "./SocialSet.css";
export const SocialSet = (props) => {
    return (
        <div className={style.socialSet}>
            <span className="fa fa-facebook-official"/>
            <a href="https://github.com/AylaJK/HackboxGames"><span className="fa fa-github"/></a>
            <span className="fa fa-twitter"/>
        </div>
    );
};
