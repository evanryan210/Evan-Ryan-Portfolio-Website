import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import { NavBar } from './NavBar';
import * as styles from './styles'
import { MainSection } from './MainSection';
import { Stylesheet } from '@fluentui/merge-styles';
import { Footer } from './Footer';
import { Projects } from './Projects';
import { Resume } from './Resume'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareTwitter, faSquareFacebook, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { About } from './About';
library.add(fas, faSquareTwitter, faSquareFacebook, faLinkedin, faSquareGithub)



function App() {
  return (
    <div className={styles.App}>

      <NavBar />{/* ContactForm is in NavBar */}
      <MainSection id='#' />
      <Resume id='resume'/>
      <Projects id='projects'/>
      <Footer />
    </div>
  );
}

export default App;
