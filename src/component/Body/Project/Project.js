import React from "react"
import classes from './Project.module.css';
import ProjectItem from './ProjectItem/ProjectItem'

import VSCodeImg from '../../../assets/Cards/VSCode.jpg'
import SortingVisualizerImg from '../../../assets/Cards/SortingVisualizer.png'
import Newsfeedimg from "../../../assets/Cards/newsfeed.png"

const project = (props) => {
    const card1 = ['reactJS', 'react-router', 'CSS', 'HTML']
    const card2 = ['reactJS', 'CSS', 'HTML']
    const card3 = ['reactJS', 'axios', 'javascript', 'CSS']

    let project = null;
    if(props.show)
    {
        project = (
            <div className = {classes.ProjectContainer}>
                <h2>Here are my projects</h2>
                <div className = {classes.Cards}>
                <ProjectItem 
                        heading = "Newsfeed App"
                        source = {Newsfeedimg}
                        tags = {card3}
                        linkSource = "https://github.com/KshitizPratap/NewsFeed"
                        linkDemo = "https://kshitizpratap.github.io/NewsFeed/">
                        Newsfeed react based app using API with customized pagination.
                    </ProjectItem>
                    <ProjectItem 
                        heading = "VSCode Portfolio"
                        source = {VSCodeImg}
                        tags = {card1}
                        linkSource = "https://github.com/KshitizPratap/VS-Portfolio"
                        linkDemo = "https://kshitizpratap.github.io/VS-Portfolio/">
                        Developer-centric portfolio based on the VSCode.
                    </ProjectItem>
                    <ProjectItem 
                        heading = "Sorting Visualizer"
                        source = {SortingVisualizerImg}
                        tags = {card2}
                        linkSource = "https://github.com/KshitizPratap/Sorting-Visualizer"
                        linkDemo = "https://github.com/KshitizPratap/Sorting-Visualizer">
                        Responsive web application for visualization of Sorting Algorithms.
                    </ProjectItem>
                    
                </div>
            </div>
        )
    }
    return(
        project
    );
}

export default project;