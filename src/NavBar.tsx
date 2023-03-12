import React, { useState, useEffect } from 'react';
import * as styles from './styles';
import { Link } from "react-router-dom";
import { ContactForm } from './ContactForm';
import { useWindowSize } from './useWindowSize';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pos, setPos] = useState('top')


    // useEffect (()=>{
    //     document.addEventListener("scroll", e => {
    //         let scrolled = document.scrollingElement?.scrollTop;
    //         if (scrolled as number >= 19){
    //            setPos("moved")
    //         } else {
    //             setPos("top")
    //         }
    //     })
    // }, [])



    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log(isOpen + '  app')
    }
    const windowSize = useWindowSize();
    return (
        <header className={styles.header}>
            <div className={styles.navBarContainer}>
                <a href="#" className={styles.navBarButton}>Home</a>
                <a href='#projects'className={styles.navBarButton} >Projects</a>
                {/* <Link to ="/about" className={styles.navBarButton}>About</Link> */}
                <a href ='#resume' className={styles.navBarButton}>Resume</a>
                <a href ='#skills' className={styles.navBarButton}>Skills</a>
                {/* <a className={styles.navBarButton} onClick={togglePopup}>Contact</a> */}
                {/* {isOpen && <ContactForm handleClose={togglePopup} />} */}
            </div>
        </header>
        
        
    )
}