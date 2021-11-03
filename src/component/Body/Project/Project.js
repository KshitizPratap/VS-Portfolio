import React from "react"
import classes from './Project.module.css';

import ProjectItem from './ProjectItem/ProjectItem'
import VSCodeImg from '../../../assets/Cards/VSCode.jpg'
import SortingVisualizerImg from '../../../assets/Cards/SortingVisualizer.png'

const project = (props) => {
    const card1 = ['react', 'CSS', 'HTML']
    const card2 = ['react', 'CSS', 'HTML']

    let project = null;
    if(props.show)
    {
        project = (
            <div className = {classes.ProjectContainer}>
                <h2>Here are my projects</h2>
                <div className = {classes.Cards}>
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