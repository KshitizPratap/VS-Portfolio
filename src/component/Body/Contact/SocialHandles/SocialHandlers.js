import React from "react";
import classes from './SocialHandles.module.css'

const socialHandles = () => {
    const social = ".socials{"
    const bracket = "}"
    return(
        <ul className={classes.Container}>
            <li>
                <span className = {classes.Counting}>1</span>
                <span className = {classes.Main}>{social}</span></li>
            <li>
                <span className = {classes.Counting}>2</span>
                <span className = {classes.Handles}>website:</span>
                <a href = "https://kshitizpratap.github.io/VS-Portfolio/">Kshitiz_VSPortfolio.me</a></li>
            <li>
                <span className = {classes.Counting}>3</span>
                <span className = {classes.Handles}>email:</span>
                <a href = "mailto:kshitiz100mit@gmail.com" target ="_blank" rel="noreferrer">Kshitiz100mit@gmail.com</a></li>
            <li>
                <span className = {classes.Counting}>4</span>
                <span className = {classes.Handles}>github:</span>
                <a href = "https://github.com/KshitizPratap/" target ="_blank" rel="noreferrer">Kshitiz_pratap</a></li>
            <li>
                <span className = {classes.Counting}>5</span>
                <span className = {classes.Handles}>linkedIn:</span>
                <a href = "https://www.linkedin.com/in/kshitiz-pratap-singh-00b57b209/" target ="_blank" rel="noreferrer">Kshitiz Pratap Singh</a></li>
            <li>
                <span className = {classes.Counting}>6</span>
                <span className = {classes.Handles}>instagram:</span>
                <a href = "https://www.instagram.com/kshitiz_pratap/" target ="_blank" rel="noreferrer">kshitiz_pratap</a></li>
            <li>
                <span className = {classes.Counting}>7</span>
                <span className = {classes.Main}>{bracket}</span></li>
        </ul>
    )
}
    
export default socialHandles;