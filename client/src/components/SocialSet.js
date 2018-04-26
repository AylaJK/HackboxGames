import React from "react";
import style from "./SocialSet.css";
export const SocialSet = (props) => {
    return (
        <div className={style.socialSet}>
            <span className="fa fa-facebook-official"/>
            <span className="fa fa-github"/>
            <span className="fa fa-twitter"/>
        </div>
    );
};
