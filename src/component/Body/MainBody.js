import React from "react";

import classes from './MainBody.module.css'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Project from './Project/Project'
// import Github from './Github/Github'

const mainBody = (props) => {
    return(
        <div className = {classes.MainBodyContainer}>
            <Home 
                show = {props.showState[0]}
                clicked = {(event) => props.clicked(event)}/>
            <About 
                show = {props.showState[1]}/>
            <Project 
                show = {props.showState[2]}/>
            <Contact 
                show = {props.showState[3]}/>
            {/* <Github 
                show = {props.showState[4]}/> */}
        </div>
    );
}

export default mainBody;