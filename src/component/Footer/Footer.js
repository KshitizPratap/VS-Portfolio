import React from "react";
import classes from './Footer.module.css'

import SynchroIcon from './FooterItems/SynchroIcon'
import ErrorIcon from './FooterItems/ErrorIcon'
import WarningIcon from './FooterItems/WarningIcon'
import PowerIcon from './FooterItems/PowerIcon'
import BellIcon from './FooterItems/BellIcon'

const footer = () => (
    <div className = {classes.Footer}>
        <div className={classes.MainGroup}>
            <a className={classes.Main} href = "https://github.com/KshitizPratap" target = "_blank" rel = "noreferrer"><SynchroIcon /><span>main</span></a>
            <div className={classes.Main}><ErrorIcon/>0 <WarningIcon style={{marginLeft:'0.3rem'}}/>0</div>
        </div>
        <div className={classes.SideGroup}>
            <div className={classes.Main}><PowerIcon /><span style={{marginLeft:'0.3rem'}}>Powered by Next.js</span></div>
            <BellIcon className={classes.Main}/>
        </div>
        
    </div>
)

export default footer;