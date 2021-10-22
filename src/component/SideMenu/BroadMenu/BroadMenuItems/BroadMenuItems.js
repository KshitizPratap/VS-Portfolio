import React from "react";
import classes from './BroadMenuItems.module.css';

const broadMenuItems = (props) => {
    return(
        <div className = {classes.BroadmenuItems}>
            <a 
                onClick = {props.clicked}>
                    <img src = {props.address} alt="item"/>
                        {props.item}
            </a>
        </div>
    )
}

export default broadMenuItems;