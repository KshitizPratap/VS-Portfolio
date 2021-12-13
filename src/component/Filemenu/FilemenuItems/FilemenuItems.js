import React from "react";
import classes from './FilemenuItems.module.css';

const filemenuitems = (props) => {

    return(
        <div className = {classes.FilemenuItem}>
            <span 
                className = {props.show ? classes.active : null}
                onClick = {props.clicked}>
                    <img src = {props.address} alt="item"/>
                        {props.item}
            </span>
        </div>
    )
}

export default filemenuitems;
