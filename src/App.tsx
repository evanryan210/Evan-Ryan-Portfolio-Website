import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import * as styles from './styles'
import { MainSection } from './MainSection';
import { Stylesheet } from '@fluentui/merge-styles';
import { Footer } from './Footer';
import { Projects } from './Projects';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <MainSection>
        <Projects />
      </MainSection>
      <Footer />
    </div>
  );
}

export default App;
