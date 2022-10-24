import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import * as styles from './styles';


export const MainSection = (props: any) =>{

    return(
        
        <div className={styles.mainSectionContainer}>
            <script src="https://kit.fontawesome.com/87afca363f.js" crossOrigin="anonymous"></script>
            <p className = {styles.name}>Evan Ryan</p>
            <div className={styles.socialButtons}>
                <a href='https://github.com/evanryan210'>
                    <FontAwesomeIcon icon={faSquareGithub} size='2x' />
                </a>
                <a href='https://linkedin.com/in/evan-ryan-b9130184'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
                <a href='https://www.facebook.com/evan.ryan.505523/'>
                    <FontAwesomeIcon icon={faSquareFacebook} size='2x' />
                </a>
            </div>

            <p className={styles.jobTitle}>Web App Developer</p>
            <img className = {styles.profileImage} src = './levert.jpg' />
            <div className = {styles.bio}>
                <p className={styles.mainSectionText}>Greetings! My name is Levert, I'm an aspiring geriatric developer that focuses 
                in AARP website design and mobility scooter software engineering. Feel free to give me a shout via Dial-up or fax! Have
                 a splendid day.</p>
            </div>
            {props.children}

        </div>
    )
}