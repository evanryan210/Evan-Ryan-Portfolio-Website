import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';
import { faLinkedin, faSquareFacebook, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = () =>{
    return(
        <footer className = {styles.footer}>
            <a className={styles.footerEmail}>Evan Ryan | evanryan99@gmail.com | (603)801-9143</a>
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
            <p className={styles.footerLocation}>Based In Washington, DC</p>
        </footer>
    )
}