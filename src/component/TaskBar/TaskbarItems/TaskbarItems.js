import React from "react";
import classes from './TaskbarItems.module.css'

const taskbarItems = (props) => (
    <div className = {classes.ItemBox}>
        {props.item}
    </div>
)

export default taskbarItems;