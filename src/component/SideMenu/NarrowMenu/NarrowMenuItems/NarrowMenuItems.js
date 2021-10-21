import React from "react";
import classes from './NarrowMenuItems.module.css'

const narrowMenuItems = (props) => (
    <div className = {classes.NarrowMenuItemContainer}>
        <img src = {props.address} alt = "About me"/>
    </div>
)

export default narrowMenuItems;