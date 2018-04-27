import React from "react";
import style from "./Panel.css";
export class Panel  extends React.Component {
    render() {
        return (
            <div style={{order : this.props.order}} className={style.panel}>
                <h1>{this.props.name}</h1>
            </div>

        );
    }
}
