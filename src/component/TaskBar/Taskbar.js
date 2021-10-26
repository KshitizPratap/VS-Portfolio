import React from "react";
import classes from './Taskbar.module.css'
import TaskbarItems from "./TaskbarItems/TaskbarItems";
import Button from './Buttons/Buttons'
import Logo from './Logo/Logo'

const taskbar = () => {
    return (
        <div className = {classes.Taskbar}>
            <div className = {classes.Items}>
                <Logo />
                <TaskbarItems item = 'File'/>
                <TaskbarItems item = 'Edit'/>
                <TaskbarItems item = 'View'/>
                <TaskbarItems item = 'Run'/>
                <TaskbarItems item = 'Terminal'/>
                <TaskbarItems item = 'Help'/>
                
            </div>
            <div className = {classes.Center}>
                <div className = {classes.CenterLogo}><Logo /></div>
                Kshitiz Pratap Singh - Visual Studio Code
            </div>
            <div className = {classes.button}>
                <Button color = 'yellow'/>
                <Button color = 'lime'/>
                <Button color = 'red'/>
            </div>
        </div>
    );
    
}

export default taskbar;
