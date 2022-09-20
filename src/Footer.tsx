import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';

export const Footer = () =>{
    return(
        <footer className = {styles.footer}>
            <a>evanryan99@gmail.com</a>
            <p>Based In Washington, DC</p>
        </footer>
    )
}