import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React , {useState} from 'react';
import { About } from './About';
import { Projects } from './Projects';
import * as styles from './styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copy from "copy-to-clipboard";  
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { Button, ClickAwayListener, Tooltip } from '@mui/material';

export const MainSection = (props: any) =>{
    const [copied, setCopied] = React.useState(false);
    const [copyText, setCopyText] = useState('evanryan99@gmail.com');
    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])

    const [open, setOpen] = React.useState(false);

    const copyToClipboard = () => {
        copy(copyText);
     }
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
        copyToClipboard();
    };


    return(
        
        <div className={styles.mainSectionContainer}>
            <script src="https://kit.fontawesome.com/87afca363f.js" crossOrigin="anonymous"></script>
            <p className = {styles.name}>Evan Ryan</p>
            <p className={styles.jobTitle}>Web App Developer</p>

            <div className={styles.socialButtons}>
                <a href='https://github.com/evanryan210'>
                    <FontAwesomeIcon icon={faSquareGithub} size='2x' />
                </a>
                <a href='https://linkedin.com/in/evan-ryan-b9130184'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>

                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Copied to clipboard"
                    >
                        <a onClick={handleTooltipOpen} className='tooltip'>
                            <FontAwesomeIcon icon={faInbox} size='2x' />
                        </a>
                    </Tooltip>
                </ClickAwayListener>




            </div>
            
            <img className = {styles.profileImage} src = './evan_profile_pic.jpg' />
            <div className = {styles.bio}>
                <p className={styles.mainSectionText}>Greetings! My name is Evan and I am a full-stack web developer. I can
                create a website from nothing using only HTML, CSS, and Javascript and am experienced in developing web and 
                desktop applications. When I am not programming, I dabble in graphic design and 2D animation which has given
                me a good understanding for front end design.</p>
            </div>
            {props.children}

        </div>
    )
}