import React from "react";
import classes from './FilemenuItems.module.css';

const filemenuitems = (props) => {
    let itemClass = [classes.item]

    if(props.active)
    {
        itemClass = [classes.item, classes.active]
    }
    return(
        <div className = {classes.FilemenuItem}>
            <span 
                className = {itemClass.join(' ')}
                onClick = {props.clicked}>
                    <img src = {props.address} alt="item"/>
                        {props.item}
            </span>
        </div>
    )
}

export default filemenuitems;