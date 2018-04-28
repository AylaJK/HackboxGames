import React from "react";
import style from "./index.scss";
import { Link } from "react-router-dom";
export class Footer  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <footer className={style.footer}>
                <div className="container-fluid">
                    <div className={style.copyright}>
                        © {new Date().getFullYear()} Copyright:
                        <Link to="/about"> Hackbox Games </Link>
                    </div>
                </div>
            </footer>
        )};
}
