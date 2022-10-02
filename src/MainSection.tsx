import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';

export const MainSection = (props: any) =>{

    return(
        <div className={styles.mainSectionContainer}>
            <p className = {styles.name}>Evan Ryan</p>
            <p className = {styles.jobTitle}>Web App Developer</p>
            <img className = {styles.profileImage} src = './levert.jpg' />
            <div className = {styles.bio}>
                <p>Greetings! My name is Levert, I'm an aspiring geriatric developer that focuses in AARP website design and mobility scooter software engineering. Feel free to give me a shout via Dial-up or fax! Have a splendid day.</p>
            </div>
            {props.children}
        </div>
    )
}