import React from 'react';
import classes from './landing.module.css';
import './landing.css'
import Particles from 'react-particles-js';

const particleOptions = {
    particles : {
      number: {
        value: 140,
        density: {
          enable: true,
          value_area: 1300
        }
      },
      color: {
        value: '#fb645f'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 3,
          color: '#fb645f'
        }
      },
      line_linked: {
        width: 2,
        color: '#00F0FF'
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover : {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 75,
          duration: 0.4
        }
      }
    }
  }

function LandingPage() {
    return(
        <div id="landing" className={classes.Landing}> 
            <Particles className={classes.particles} params={particleOptions} />
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
