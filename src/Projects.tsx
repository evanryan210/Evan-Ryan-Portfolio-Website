import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';
import placeholder from './placeholder-image.png'

export const Projects = () =>{
    return(
        <div className={styles.projectList}>
              <a href='https://github.com/evanryan210/sharp-resize' className = {styles.sharpProject}>
                <span>Bulk Image Resizer</span>
              </a>

              <a className = {styles.osparkProject}>
                <span>Orange Spark Website</span>
              </a>

              <a className = {styles.projectBubbles}>
                <span>Bulk Image Resizer</span>
              </a>

              <a className = {styles.projectBubbles}>
                <span>Bulk Image Resizer</span>
              </a>

        </div>
    )
}