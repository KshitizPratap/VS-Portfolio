import React from "react";
import classes from './Button.module.css'

const button = (props) => (
    <div className = {classes.button} style = {{backgroundColor : `${props.color}`}}>
    </div>
);

export default button