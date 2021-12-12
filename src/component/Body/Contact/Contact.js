import React from "react"
import SocialHandles from "./SocialHandles/SocialHandlers";
import classes from './Contact.module.css'

const contact = (props) => {
    let contact = null;
    if(props.show)
    {
        contact = (
            <div className = {classes.ContactContainer}>
                <h2>My Social Handles</h2>
                <SocialHandles />
            </div>
        )
    }
    return(
        contact
    );
}

export default contact;
