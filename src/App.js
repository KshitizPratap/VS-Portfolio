import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';
import Taskbar from './component/TaskBar/Taskbar'
import NarrowMenu from './component/SideMenu/NarrowMenu/NarrowMenu'
import BroadMenu from './component/SideMenu/BroadMenu/BroadMenu'
import FileMenu from './component/Filemenu/Filemenu'
import Footer from './component/Footer/Footer'
import MainBody from './component/Body/MainBody'

import Home from './component/Body/Home/Home'
import Contact from './component/Body/Contact/Contact'
import Project from './component/Body/Project/Project'
import About from './component/Body/About/About'

function App(){

  const [showState, setShowState] = useState([false, false, false, false])

  useEffect(() => {

    let arr = [false, false, false, false, false]

    if(sessionStorage.getItem("index") != null)
      arr[sessionStorage.getItem("index")] = true;
    else
      arr = [true, false, false, false, false]

      setShowState(arr)

  }, [])

  const activeHandler = (index) => {
    let arr = [false, false, false, false]
    arr[index] = true;

    setShowState(arr);
    sessionStorage.setItem("index", index)
  }

    return (
      <Router>
        <div className={classes.Container}>
          <Taskbar />
          <div className={classes.Sidemenu}>
            <NarrowMenu 
              showState = {showState}
              clicked = {(elementNum) => activeHandler(elementNum)}/>
            <BroadMenu 
              showState = {showState}
              clicked = {(elementNum) => activeHandler(elementNum)}/>
    
            <div>
              <FileMenu 
                showState = {showState}
                clicked = {(elementNum) => activeHandler(elementNum)}/>

              <Routes>
                <Route exact path='/Home' element={< Home show = {showState[0]} clicked = {(event) => activeHandler(event)}/>} />
                <Route exact path='/Contact' element={< Contact show = {showState[3]} />} />
                <Route exact path='/About' element={< About show = {showState[1]} />} />
                <Route exact path='/Project' element={< Project show = {showState[2]} />} />
              </Routes>
            </div> 
          </div>

          <Footer />
        </div>
      </Router>
    );
}

export default App;