import React from "react";
import classes from './BroadMenuItems.module.css';

const broadMenuItems = (props) => {
    return(
        <div className = {classes.BroadmenuItems}>
            <span
                href = "/"
                onClick = {props.clicked}>
                    <img src = {props.address} alt="item"/>
                        {props.item}
            </span>
        </div>
    )
}

export default broadMenuItems;
