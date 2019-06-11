import React from 'react';
import classes from './landing.module.css';
import './landing.css'

import cloud from '../../assets/Portfolio Images/1x/grey cloud.png'
import ring from '../../assets/Portfolio Images/1x/ring.png'
import darkblue from '../../assets/Portfolio Images/1x/darkbluedots.png'
import lightblue from '../../assets/Portfolio Images/1x/lightbluedots.png'

function LandingPage() {
    return(
        <div id="landing" className={classes.Landing}>
            <ul id="scene" >
                <li className="layer"  data-depth="0.25"><img alt='' id="lb" src={lightblue}></img></li>
                <li className="layer"  data-depth="0.75"><img alt='' id="db" src={darkblue}></img></li>
            </ul> 
            <div className={classes.ringCloud}>
                <img alt='' className={classes.ringimage} src={ring}></img>
                <img alt='' className={classes.cloudImage} src={cloud}></img>
            </div>
            <div className={classes.About}>
                <div className="px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
                    <h1 style={{color: 'white'}}>Gaurav Julka</h1>
                    <p style={{color: 'white'}} className="lead">I am a highly motivated 
                        <span> Web Developer</span>, with a passion for 
                        creating intuitive designs and dynamic user experiences.
                    </p>
                </div>
            </div>
        </div>
        
        
    )
}

export default LandingPage
