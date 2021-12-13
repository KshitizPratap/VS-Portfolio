import React from "react"
import SocialHandles from "./SocialHandles/SocialHandlers";
import classes from './Contact.module.css'

const contact = () => {
    return(
        <div className = {classes.ContactContainer}>
        <h2>My Social Handles</h2>
        <SocialHandles />
    </div>
    );
}

export default contact;
