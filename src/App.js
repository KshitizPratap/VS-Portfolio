import React, { Component } from 'react';

import classes from './App.module.css';
import Taskbar from './component/TaskBar/Taskbar'
import NarrowMenu from './component/SideMenu/NarrowMenu/NarrowMenu'
import BroadMenu from './component/SideMenu/BroadMenu/BroadMenu'
import FileMenu from './component/Filemenu/Filemenu'
import Footer from './component/Footer/Footer'
import MainBody from './component/Body/MainBody'

class  App extends Component{

  state = {
    showState : [true, false, false, false]
  }

  activeHandler = (index) => {
    let arr = [false, false, false, false]
    arr[index] = true;

    console.log(index);
    this.setState({showState : arr});
  }

  render(){
    return (
      <div className={classes.container}>
        <Taskbar />
        <div className={classes.Sidemenu}>
          <NarrowMenu 
            showState = {this.state.showState}
            clicked = {(elementNum) => this.activeHandler(elementNum)}/>
          <BroadMenu 
            showState = {this.state.showState}
            clicked = {(elementNum) => this.activeHandler(elementNum)}/>
  
          <div>
            <FileMenu 
              showState = {this.state.showState}
              clicked = {(elementNum) => this.activeHandler(elementNum)}/>

            <MainBody 
              showState = {this.state.showState}
              clicked = {(event) => this.activeHandler(event)}/>
          </div>
  
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
