import React from 'react';

import classes from './App.module.css';
import Taskbar from './component/TaskBar/Taskbar'
import NarrowMenu from './component/SideMenu/NarrowMenu/NarrowMenu'
import BroadMenu from './component/SideMenu/BroadMenu/BroadMenu'
import FileMenu from './component/Filemenu/Filemenu'

const app = () => {
  return (
    <div className={classes.container}>
      <Taskbar />
      <div className={classes.Sidemenu}>
        <NarrowMenu />
        <BroadMenu />

        <div>
          <FileMenu />
          <p>Body</p>
        </div>

      </div>
    </div>
  );
}

export default app;
