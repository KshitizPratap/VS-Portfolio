import React from "react";

import classes from './BroadMenu.module.css'
import BroadMenuItem from '../BroadMenu/BroadMenuItems/BroadMenuItems'
import Home from '../../../assets/Icons/html.jpg'
import About from '../../../assets/Icons/react.jpg'
import Project from '../../../assets/Icons/css.png'
import Contact from '../../../assets/Icons/js.png'

const broadMenu = (props) => (
    <div className={classes.BroadMenuContainer}>
        <p className={classes.Extra}>EXPLORER</p>

        <div className={classes.ItemContainer}>
            <span className={classes.Portfolio}>PORTFOLIO</span>
            <div className={classes.Item}>
                <BroadMenuItem 
                item = 'Home.html' 
                address = {Home}
                clicked = {() => props.clicked(0)}
                active = {props.showState[0]}/>
            </div>
            <div className={classes.Item}>
                <BroadMenuItem 
                item = 'About.jsx' 
                address = {About}
                clicked = {() => props.clicked(1)}
                active = {props.showState[1]}/>
            </div>
            <div className={classes.Item}>
                <BroadMenuItem 
                item = 'Project.css' 
                address = {Project}
                clicked = {() => props.clicked(2)}
                active = {props.showState[2]}/>
            </div>
            <div className={classes.Item}>
                <BroadMenuItem 
                item = 'Contact.js' 
                address = {Contact}
                clicked = {() => props.clicked(3)}
                active = {props.showState[3]}/>
                </div>
        </div>
    </div>
)

export default broadMenu;