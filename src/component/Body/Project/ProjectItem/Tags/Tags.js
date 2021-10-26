import React from "react";
import classes from './Tags.module.css';

const tags = (props) => (
    <div className = {classes.Tags}>
        {props.tech}
    </div>
);

export default tags;