import React from "react"

const home = (props) => {
    let home = null;
    if(props.show)
    {
        home = (
            <div>
                <h1 style = {{color : 'white'}}>home page</h1>
            </div>
        )
    }
    return(
        home
    );
}

export default home;