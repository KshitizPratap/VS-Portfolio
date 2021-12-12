import React from "react"
import classes from './Home.module.css';
import Typewriter from "typewriter-effect";

const home = (props) => {
    let home = null;
    if(props.show)
    {
        home = (
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
                    <button 
                        className={classes.Button1}
                        onClick = {() => props.clicked(2)}>My Work</button>
                    <button 
                        className={classes.Button2}
                        onClick = {() => props.clicked(3)}>Contact me</button>
                </div>
            </div>
        )
    }
    return home
}

export default home;

