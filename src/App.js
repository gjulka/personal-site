import React, {Component} from 'react';
import LandingPage from './components/landingpage/landing';
import Navbar from './components/navbar/navbar'
import './App.css'
import classes from './App.module.css';

import Parallax from 'parallax-js'

import cloud from './assets/Portfolio Images/1x/grey cloud.png'
import ring from './assets/Portfolio Images/1x/ring.png'
import darkblue from './assets/Portfolio Images/1x/darkbluedots.png'
import lightblue from './assets/Portfolio Images/1x/lightbluedots.png'


class App extends Component { 

  componentDidMount() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene)
  }

  render() {
    return(
      <div className={classes.App}>
        <Navbar />
        <LandingPage />
          <ul id="scene" >
            <li className="layer"  data-depth="0.25"><img alt='' id="lb" src={lightblue}></img></li>
            <li className="layer"  data-depth="0.75"><img alt='' id="db" src={darkblue}></img></li>
          </ul> 
          <div className={classes.ringCloud}>
            <img alt='' className={classes.ringimage} src={ring}></img>
            <img alt='' className={classes.cloudImage} src={cloud}></img>
          </div>
      </div>
    )

  }
}

export default App;
