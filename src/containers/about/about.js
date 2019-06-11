import React from 'react'
import classes from './about.module.css';

import JSLogo from '../../assets/logos/jslogo.svg'
import ReactLogo from '../../assets/logos/reactlogo.svg'
import HTMLLogo from '../../assets/logos/htmllogo.svg'
import CSSLogo from '../../assets/logos/css-5.svg'
import NodeLogo from '../../assets/logos/nodelogo.svg'
import PSLogo from '../../assets/logos/photoshoplogo.svg'
import IllLogo from '../../assets/logos/illustrator.svg'


function About() {
    return (
        <div id="about" className={classes.AboutPage}>
            <h1><u>ABOUT</u></h1>
            <div className={classes.personalDiv}>
                <div className={classes.personalImage}>
                    <div className={classes.personalIcon}></div>
                </div>
                <div className={classes.personalLinks}>
                    <a href='https://drive.google.com/open?id=1C5DgNfE0-18yAXUMSnJ-QeCj3EKbSUsv' target="_blank" rel="noopener noreferrer"><ion-icon name="document"></ion-icon></a>
                    <a href='https://www.linkedin.com/in/gaurav-julka-253294aa/' target='_blank' rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href='https://github.com/gjulka?tab=repositories' target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                </div>
            </div>
            <div className={classes.skillsList}>
                <h3><u>Skills</u></h3>
                <ul>
                    <li><img alt='' src={JSLogo} />JavaScript</li>
                    <li><img alt='' src={HTMLLogo} />HTML</li>
                    <li><img alt='' src={CSSLogo} />CSS</li>
                    <li><img alt='' src={ReactLogo} />React.js</li>
                    <li><img alt='' src={NodeLogo} />Node.js</li>
                    <li><img alt='' src={PSLogo} />Photoshop</li>
                    <li><img alt='' src={IllLogo} />Illustrator</li>
                </ul>
            </div>
        </div>
    )
}

export default About