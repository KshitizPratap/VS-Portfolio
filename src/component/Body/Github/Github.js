import React from "react"
import classes from './Github.module.css';

const github = (props) => {
    let githubContent = null;
    if(props.show)
    {
        githubContent = (
            <div className = {classes.GithubContainer}>
                <h2>Github</h2>
            </div>
        )
    }
    return(
        githubContent
    );
}

export default github;