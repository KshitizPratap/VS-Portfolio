import React from "react";
import classes from './FilemenuItems.module.css';

const filemenuitems = (props) => (
    <div className = {classes.FilemenuItem}>
        <a href="/" className = {classes.item}>
        <img src = {props.address} alt="item image"/>
            {props.item}
        </a>
    </div>
);

export default filemenuitems;