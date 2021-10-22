import React from "react"

const contact = (props) => {
    let contact = null;
    if(props.show)
    {
        contact = (
            <div>
                <h1 style = {{color : 'white'}}>Contact page</h1>
            </div>
        )
    }
    return(
        contact
    );
}

export default contact;