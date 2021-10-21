import React from "react";
import classes from './Filemenu.module.css';

import FileMenuItem from './FilemenuItems/FilemenuItems'
import Home from '../../assets/img/html.jpg'
import About from '../../assets/img/react.jpg'
import Project from '../../assets/img/css.png'
import More from '../../assets/img/js.png'

const filemenu = () => (
    <div className = {classes.FilemenuContainer}>
        <FileMenuItem item = 'Home.html' address = {Home}/>
        <FileMenuItem item = 'About.css' address = {About}/>
        <FileMenuItem item = 'Project.js' address = {Project}/>
        <FileMenuItem item = 'More.jsx' address = {More}/>
    </div>
);

export default filemenu;