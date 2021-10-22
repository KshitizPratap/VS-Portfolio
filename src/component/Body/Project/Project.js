import React from "react"

const project = (props) => {
    let project = null;
    if(props.show)
    {
        project = (
            <div>
                <h1 style = {{color : 'white'}}>project page</h1>
            </div>
        )
    }
    return(
        project
    );
}

export default project;