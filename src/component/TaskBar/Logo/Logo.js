import React from "react";

import classes from './Logo.module.css'
import Logo from '../../../assets/Icons/Logo.jpg'

const logo = () => (
    <div className = {classes.Logo}>
        <img src = {Logo} alt = "Logo"/>
    </div>
);

export default logo;