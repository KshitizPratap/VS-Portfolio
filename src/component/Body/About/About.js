import React from "react"

const about = (props) => {
    let about = null;
    if(props.show)
    {
        about = (
            <div>
                <h1 style = {{color : 'white'}}>About page</h1>
            </div>
        )
    }
    return(
        about
    );
}

export default about;