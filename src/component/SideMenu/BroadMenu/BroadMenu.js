import React from "react";

import classes from './BroadMenu.module.css'
import FileMenuItem from '../../Filemenu/FilemenuItems/FilemenuItems'
import Home from '../../../assets/img/html.jpg'
import About from '../../../assets/img/react.jpg'
import Project from '../../../assets/img/css.png'
import Contact from '../../../assets/img/js.png'

const broadMenu = () => (
    <div className={classes.BroadMenuContainer}>
        <p className={classes.Extra}>EXPLORER</p>

        <div className={classes.ItemContainer}>
            <span className={classes.Portfolio}>PORTFOLIO</span>
            <div className={classes.Item}><FileMenuItem item = 'Home.html' address = {Home}/></div>
            <div className={classes.Item}><FileMenuItem item = 'About.css' address = {About}/></div>
            <div className={classes.Item}><FileMenuItem item = 'Project.js' address = {Project}/></div>
            <div className={classes.Item}><FileMenuItem item = 'Contact.jsx' address = {Contact}/></div>
        </div>
    </div>
)

export default broadMenu;