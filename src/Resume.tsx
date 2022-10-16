import React from 'react';
import SkillsBar from './SkillsBar'
import * as styles from './styles';

export const Resume = (props: any) =>{
    return(
        <div className={styles.mainSectionContainer}>
            <p className = {styles.name}>Skills & Experience</p>
            <SkillsBar />
        </div>
    )
}