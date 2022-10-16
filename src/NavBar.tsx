import React from 'react';
import * as styles from './styles';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navBarContainer}>
                <Link to="/" className={styles.navBarButton}>Home</Link>
                <a href='#projects'className={styles.navBarButton} >Projects</a>
                <a href="#about" className={styles.navBarButton}>About</a>
                <Link to ='/resume' className={styles.navBarButton}>Resume</Link>
            </div>
        </header>
    )
}