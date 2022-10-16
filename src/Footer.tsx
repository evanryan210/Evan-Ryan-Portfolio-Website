import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';
import { faLinkedin, faSquareFacebook, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = () =>{
    return(
        <footer className = {styles.footer}>
            <a className={styles.footerEmail}>evanryan99@gmail.com</a>
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
            <p>Based In Washington, DC</p>
        </footer>
    )
}