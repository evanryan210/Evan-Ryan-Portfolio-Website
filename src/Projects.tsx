import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';
import placeholder from './placeholder-image.png'

export const Projects = () =>{
  return (
    <div>
      {/* Web projects section */}
      <h1 id='projects' className = {styles.sectionTitle}>Web</h1>
      <div className={styles.projectList}>
        <a href='https://github.com/evanryan210/sharp-resize' className={styles.sharpProject}>
          <span>Image Resizing App</span>
        </a>
        <a href='http://ospark.com/' className={styles.osparkProject}>
          <span>Orange Spark Website</span>
        </a>
        <a className={styles.projectBubble}>
          <span>Project 3</span>
        </a>
        <a className={styles.projectBubble}>
          <span>Project 4</span>
        </a>
      </div>

      {/* Engineering projects section */}
      <h1 className = {styles.sectionTitle}>Engineering</h1>
      <div className={styles.projectList}>
        <a className={styles.generatorProject}>
          <span>Thermoelectric Generator</span>
        </a>
        <a className={styles.greenhouseProject}>
          <span>Greenhouse Design</span>
        </a>
        <a className={styles.magnetProject}>
          <span>Electromagnetic Braking System</span>
        </a>
        <a className={styles.whaleProject}>
          <span>Anti-litter Campaign: Whale Sculpture</span>
        </a>
      </div>
    </div>
  )
}