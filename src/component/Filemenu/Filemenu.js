import React from "react";
import classes from './Filemenu.module.css';
import { Link } from "react-router-dom";

import FileMenuItem from './FilemenuItems/FilemenuItems'
import Home from '../../assets/Icons/html.jpg'
import About from '../../assets/Icons/react.jpg'
import Project from '../../assets/Icons/css.png'
import Contact from '../../assets/Icons/js.png'

const filemenu = (props) => (
    
    <div className = {classes.FilemenuContainer}>
        <Link to = "/VS-Portfolio"
            style={{textDecoration : "none"}}>
            <FileMenuItem 
            item = 'Home.html' 
            address = {Home}
            clicked = {() => props.clicked(0)}
            show = {props.showState[0]}/>
        </Link>

        <Link to = "/VS-Portfolio/About"
            style={{textDecoration : "none"}}>
            <FileMenuItem 
                item = 'About.jsx' 
                address = {About}
                clicked = {() => props.clicked(1)}
                show = {props.showState[1]}/>
        </Link>

        <Link to = "/VS-Portfolio/Project"
            style={{textDecoration : "none"}}>
            <FileMenuItem 
                item = 'Project.css' 
                address = {Project}
                clicked = {() => props.clicked(2)}
                show = {props.showState[2]}/>
        </Link>

        <Link to = "/VS-Portfolio/Contact"
            style={{textDecoration : "none"}}>
            <FileMenuItem 
                item = 'Contact.js' 
                address = {Contact}
                clicked = {() => props.clicked(3)}
                show = {props.showState[3]}/>
        </Link>
    </div>
);

export default filemenu;