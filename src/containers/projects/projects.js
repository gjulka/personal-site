import React, { Component } from 'react'
import classes from './projects.module.css';
import { Modal, ModalHeader, ModalBody, Container, Row } from 'reactstrap';

import Project from '../../components/project/project'


import CryptoIcon from '../../assets/cryptocurrency.svg'

import crypto from '../../assets/yourcrypto-site.png'
import discordimg from '../../assets/apexbot.png'
import angimg from '../../assets/angflooring.jpg'
// use modal to make each item full screen

class  Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            project1: {
                image: crypto,
                title: 'Crypto App',
                description: `Cryptocurrency tracker app. Users are able to 
                "Buy", "Sell" and track cryptocurrencies of their choosing.`,
                links: ["http://www.mycryptoapp.me/", "https://github.com/gjulka/cryptosite-client"]
            },
            project2: {
                image: angimg,
                title: 'ANG Flooring',
                description: `Re-imagining a local businesses' old website and create something with a more modern feel as well as adding more 
                functionality in terms of customer engagement. 
                (Unavailable on the web as of now, but code is reviewable on github.)`,
                links: ['', 'https://github.com/gjulka/angflooring' ]
            },
            project3: {
                image: discordimg,
                title: 'Discord Bot',
                description: `A Discord bot able to gather user game stats and deliver them straight to the Discord App.
                (No link to the bot exists. Code availale on github.)`,
                links: ['', 'https://github.com/gjulka/ApexStatsBot']
            },
            title: '',
            image: null,
            description: '',
            links: []
            
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggleP1 = this.toggleP1.bind(this)
        this.toggleP2 = this.toggleP2.bind(this)
        this.toggleP3 = this.toggleP3.bind(this)

    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    toggleP1() {
        this.setState({
            modal: !this.state.modal,
            title: this.state.project1.title,
            image: this.state.project1.image,
            description: this.state.project1.description,
            links: this.state.project1.links
        })
    }

    toggleP2() {
        this.setState({
            modal: !this.state.modal,
            title: this.state.project2.title,
            image: this.state.project2.image,
            description: this.state.project2.description,
            links: this.state.project2.links
        })
    }

    toggleP3() {
        this.setState({
            modal: !this.state.modal,
            title: this.state.project3.title,
            image: this.state.project3.image,
            description: this.state.project3.description,
            links: this.state.project3.links
        })
    }
    
    render() {
        const projectLinksListItem ={
            display: 'block'
        }

        if(this.state.links[0] === '') {
            projectLinksListItem.display = 'none'
        }

        return( 
            <div id="projects" className={classes.ProjectsPage}>
                <h1><u>PROJECTS</u></h1>
                <div className={classes.projectsDiv}>
                    <ul id='projectList' className="list-group">
                        <Project 
                            image={crypto}
                            title={'Crypto App'}
                            toggleButton={this.toggleP1}
                         />
                         <Project 
                            image={angimg}
                            title={'ANG Flooring'}
                            toggleButton={this.toggleP2}
                         />
                         <Project 
                            image={discordimg}
                            title={'Discord Bot'}
                            toggleButton={this.toggleP3}
                         />
                    </ul>
                </div>
                <Modal id='projedctsModal' isOpen={this.state.modal} toggle={this.toggle} scrollable={true} >
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody><img alt='' className={classes.modalImage} src={this.state.image}/></ModalBody>
                    <hr style={{width: '100%', color: 'black', height: '1px'}} />
                    <ModalBody>{this.state.description}</ModalBody>
                    <ModalBody>
                        <h4><u>Links</u></h4>
                        <ul className={classes.projectLinks}>
                            <li style={projectLinksListItem}><a href={this.state.links[0]} target="_blank" rel="noopener noreferrer"><img className={classes.linksImageIcon} src={CryptoIcon} alt="" /></a></li>
                            <li><a href={this.state.links[1]} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a></li>
                        </ul>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Projects