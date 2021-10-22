import React from "react";

import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Project from './Project/Project'

const mainBody = (props) => {
    return(
        <div>
            <Home show = {props.showState[0]}/>
            <About show = {props.showState[1]}/>
            <Project show = {props.showState[2]}/>
            <Contact show = {props.showState[3]}/>
        </div>
    );
}

export default mainBody;