import { mergeStyles } from '@fluentui/merge-styles';
import { faLinkedin, faSquareFacebook, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as styles from './styles';

export const About = (props: any) =>{
    return(
        <div className={styles.mainSectionContainer}>
            <h1 id='about' className = {styles.sectionTitle}>About</h1>
            <div className = {styles.bio}>
                <p className={styles.mainSectionText}>I am a full stack web developer, which means I can turn an idea into a complete website.
                </p>
            </div>
        </div>
    )
}