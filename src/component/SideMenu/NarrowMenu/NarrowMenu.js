import React from "react";
import { Link } from "react-router-dom";

import classes from './NarrowMenu.module.css'
import FilesIcon from "./NarrowMenuItems/FileIcon";
import PencilIcon from "./NarrowMenuItems/PencilIcon";
import TagIcon from './NarrowMenuItems/TagIcon';
import MailIcon from './NarrowMenuItems/MailIcon'
import SettingsIcon from "./NarrowMenuItems/SettingIcon";

const narrowMenu = (props) => {

    return(
    <div className={classes.NarrowMenuContainer}>
        <div className={classes.wrapper}>
            <Link to = "/Home">
            <div 
                onClick = {() => props.clicked(0)}
                className = {[classes.Icon, props.showState[0] ? classes.active : null].join(' ')}><FilesIcon /></div>
            
            </Link>
            
            <Link to = "/About">
            <div 
                onClick = {() => props.clicked(1)}
                className = {[classes.Icon, props.showState[1] ? classes.active : null].join(' ')}><PencilIcon/></div>
            </Link>
            
            <Link to = "/Project">
            <div 
                onClick = {() => props.clicked(2)}
                className = {[classes.Icon, props.showState[2] ? classes.active : null].join(' ')}><TagIcon /></div>
            </Link>
            
            
            <Link to = "/Contact">
            <div 
                onClick = {() => props.clicked(3)}
                className = {[classes.Icon, props.showState[3] ? classes.active : null].join(' ')}><MailIcon /></div>
            </Link>
            
        </div>
        <SettingsIcon className={classes.Setting}/>
    </div>
    ) 
}

export default narrowMenu;