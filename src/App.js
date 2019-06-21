import React, {Component} from 'react';
import LandingPage from './containers/landingpage/landing';
import About from './containers/about/about'
import Navbar from './components/navbar/navbar'


import Parallax from 'parallax-js'
import Projects from './containers/projects/projects';
import Contact from './containers/contacts/contacts';

class App extends Component { 

  // componentDidMount() {
  //   var scene = document.getElementById('scene');
  //   var parallax = new Parallax(scene)

  //   // var screenWidth = window.matchMedia("(min-width: 1200px)")
  //   // var projectLists = document.getElementById("projectList")
  //   // if(screenWidth.matches) {
  //   //     projectLists.classList.add("list-group-horizontal")
  //   // } else {
  //   //   projectLists.classList.remove("list-group-horizontal")
  //   // }
  // }

  render() {
    return(
      <div >
        <Navbar />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default App;
