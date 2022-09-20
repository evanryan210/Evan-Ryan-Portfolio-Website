import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';

export const NavBar = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.navBarContainer}>
                <a className = {styles.navBarButton} href="#">Home</a>
                <a className = {styles.navBarButton} href="#">Projects</a>
                <a className = {styles.navBarButton} href="#">About</a>
                <a className = {styles.navBarButton} href="#">Resume</a>
            </div>
        </header>
    )
}