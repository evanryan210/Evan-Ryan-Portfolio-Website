import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import * as styles from './styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { faInbox } from '@fortawesome/free-solid-svg-icons'


export const MainSection = (props: any) =>{
    const [copied, setCopied] = React.useState(false);
    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])
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
                <CopyToClipboard onCopy={onCopy} text={'evanryan99@gmail.com'}>
                    <a onClick={()=>{
                        alert('Email copied to clipboard!')
                    }}className='tooltip'>
                        <FontAwesomeIcon icon={faInbox} size='2x' />
                    </a>
                </CopyToClipboard>
            </div>

            <p className={styles.jobTitle}>Web App Developer</p>
            <img className = {styles.profileImage} src = './evan_profile_pic.jpg' />
            <div className = {styles.bio}>
                <p className={styles.mainSectionText}>Greetings! My name is Evan and I am a full-stack web developer. I can
                create a website from nothing using only HTML, CSS, and Javascript and am experienced in developing web and 
                desktop applications. When I am not programming, I dabble in graphic design and 2D animation which has enabled
                me to deliver full front end designs.</p>
            </div>
            {props.children}

        </div>
    )
}