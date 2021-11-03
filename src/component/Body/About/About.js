import React from "react"
import classes from './About.module.css'
import MyPic from '../../../assets/MyPic.jpg'

const about = (props) => {
    let about = null;
    if(props.show)
    {
        about = (
            <div className = {classes.AboutContainer}>
                <h2>About me</h2>
                <div className = {classes.ImageDiv}><img src = {MyPic} alt = "Developer's photo"/></div>
                <div className = {classes.Content}>
                    <p>I live and work in <a href = "https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh/@28.3760609,79.3518995,12z/data=!3m1!4b1!4m5!3m4!1s0x39a007334d02998d:0x5b9d44cf31ee87f!8m2!3d28.3670355!4d79.4304381?hl=en" target = "_blank" rel="noopener">Bareilly, Uttar Pradesh</a>.<br/> I freelance when I can, mostly building custom websites that you can’t get from a template.
                    My place in the world seems to be at <span> the intersection of creativity and logic </span>. I approach each problem as a <span>learning experience</span> that informs the rest
                    of the project.<br/><br/>Who is visiting your site? What are they looking for? How do they find it? These are the pointer that I keep in mind while developing my Desktop-first responsive websites with <span>HTML, CSS and React</span>.
                    <br/><br/><span>I am always experimenting, always learning, and never bored.</span></p>
                </div>
            </div>
        )
    }
    return(
        about
    );
}

export default about;



