import React from "react"
import classes from './Home.module.css';
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const home = (props) => {
    return(
        <div className = {classes.Container}>
                <h1>Kshitiz Pratap Singh</h1>
                <div className = {classes.Typewriter}>
                    <Typewriter 
                        onInit = {(typewriter) => {
                            typewriter.typeString("Front End Web Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Software Enthusiast")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Front End Web Developer")
                                .start()
                        }}/>
                </div>
                <div className={classes.Button}>
                    <Link to = "/VS-Portfolio/Project">
                        <button 
                            className={classes.Button1}>My Work</button>
                    </Link>

                    <Link to = "/VS-Portfolio/Contact">
                    <button 
                        className={classes.Button2} >Contact me</button>
                    </Link>
                </div>
            </div>

    )
}

export default home;

