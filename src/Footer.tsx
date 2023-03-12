import { mergeStyles } from '@fluentui/merge-styles';
import React, {useState} from 'react';
import * as styles from './styles';
import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainSection } from './MainSection';
import { ClickAwayListener, Tooltip } from '@mui/material';
import copy from "copy-to-clipboard";  


export const Footer = () => {
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
    return (
        <footer className={styles.footer}>
            <p className={styles.footerEmail}><span>Evan Ryan</span> | <span>evanryan99@gmail.com</span> | <span>(603)801-9143</span></p>
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
            <p className={styles.footerLocation}>Based In Washington, DC</p>
        </footer>
    )
}