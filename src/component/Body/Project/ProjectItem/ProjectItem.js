import React from "react";
import classes from './ProjectItem.module.css'
import Tags from './Tags/Tags'


const projectItem = (props) => {
    const tech = (
        <div className={classes.TagContainer}>
            {props.tags.map(element => {
                return <Tags 
                    tech = {element}
                    key = {element}/>
            })}
        </div>
    )
    return(
    <div className = {classes.Card}>
        <div>
            <img src = {props.source} alt = "Project"/>
        </div>

        <div>
            <p className={classes.Heading}>{props.heading}</p>
            <p className = {classes.Info}>{props.children}</p>
        </div>

        <div>
            {tech}
        </div>

        <div className = {classes.Links}>
            <a href = {props.linkSource} target="_blank" rel = "noreferrer">Source Code</a>
            <a href = {props.linkDemo} target="_blank" rel = "noreferrer">Live Demo</a>
        </div>
    </div>
    )
}


export default projectItem;