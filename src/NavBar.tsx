import React, { useState } from 'react';
import * as styles from './styles';
import { Link } from "react-router-dom";
import { ContactForm } from './ContactForm';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log(isOpen + '  app')
    }


    return (
        <header className={styles.header}>
            <div className={styles.navBarContainer}>
                <Link to="/" className={styles.navBarButton}>Home</Link>
                <Link to='/projects'className={styles.navBarButton} >Projects</Link>
                <Link to ="/about" className={styles.navBarButton}>About</Link>
                <Link to ='/resume' className={styles.navBarButton}>Resume</Link>
                <a className={styles.navBarButton} onClick={togglePopup}>Contact</a>
                {isOpen && <ContactForm handleClose={togglePopup} />}

            </div>

        </header>
        
        
    )
}