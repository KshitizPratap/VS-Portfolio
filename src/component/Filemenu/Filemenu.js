import React from "react";
import classes from './Filemenu.module.css';

import FileMenuItem from './FilemenuItems/FilemenuItems'
import Home from '../../assets/Icons/html.jpg'
import About from '../../assets/Icons/react.jpg'
import Project from '../../assets/Icons/css.png'
import Contact from '../../assets/Icons/js.png'
import Github from '../../assets/Icons/github.png'

const filemenu = (props) => (
    
    <div className = {classes.FilemenuContainer}>
        <FileMenuItem 
            item = 'Home.html' 
            address = {Home}
            clicked = {() => props.clicked(0)}
            active = {props.showState[0]}/>

        <FileMenuItem 
            item = 'About.jsx' 
            address = {About}
            clicked = {() => props.clicked(1)}
            active = {props.showState[1]}/>

        <FileMenuItem 
            item = 'Project.css' 
            address = {Project}
            clicked = {() => props.clicked(2)}
            active = {props.showState[2]}/>

        <FileMenuItem 
            item = 'Contact.js' 
            address = {Contact}
            clicked = {() => props.clicked(3)}
            active = {props.showState[3]}/>

        <FileMenuItem 
            item = 'Github.md' 
            address = {Github}
            clicked = {() => props.clicked(4)}
            active = {props.showState[4]}/>
    </div>
);

export default filemenu;