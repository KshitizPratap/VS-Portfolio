import React from "react"
import classes from './Project.module.css';

import ProjectItem from './ProjectItem/ProjectItem'
import VSCodeImg from '../../../assets/Cards/VSCode.jpg'
import SortingVisualizerImg from '../../../assets/Cards/SortingVisualizer.png'

const project = (props) => {
    const card1 = ['react', 'HTML']
    const card2 = ['react', 'HTML']

    let project = null;
    if(props.show)
    {
        project = (
            <div className = {classes.ProjectContainer}>
                <h1>Here are my projects</h1>
                <div className = {classes.Cards}>
                    <ProjectItem 
                        heading = "VSCode Portfolio"
                        source = {VSCodeImg}
                        tags = {card1}
                        linkSource = "https://github.com/KshitizPratap/VS-Portfolio"
                        linkDemo = "/">
                        Developer-centric portfolio based on the VSCode.
                    </ProjectItem>
                    <ProjectItem 
                        heading = "Sorting Visualizer"
                        source = {SortingVisualizerImg}
                        tags = {card2}
                        linkSource = "https://github.com/KshitizPratap/Sorting-Visualizer"
                        linkDemo = "/">
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