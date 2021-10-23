import React from "react";

import classes from './NarrowMenu.module.css'
import FilesIcon from "./NarrowMenuItems/FileIcon";
import PencilIcon from "./NarrowMenuItems/PencilIcon";
import TagIcon from './NarrowMenuItems/TagIcon';
import MailIcon from './NarrowMenuItems/MailIcon'

const narrowMenu = (props) => {

    return(
    <div className={classes.NarrowMenuContainer}>
        <div 
            onClick = {() => props.clicked(0)}
            className = {[classes.Icon, props.showState[0] ? classes.active : null].join(' ')}><FilesIcon /></div>
        <div 
            onClick = {() => props.clicked(1)}
            className = {[classes.Icon, props.showState[1] ? classes.active : null].join(' ')}><PencilIcon/></div>
        <div 
            onClick = {() => props.clicked(2)}
            className = {[classes.Icon, props.showState[2] ? classes.active : null].join(' ')}><TagIcon /></div>
        <div 
            onClick = {() => props.clicked(3)}
            className = {[classes.Icon, props.showState[3] ? classes.active : null].join(' ')}><MailIcon /></div>
    </div>
    ) 
}

export default narrowMenu;