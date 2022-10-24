import * as styles from './styles';
import React, { useState } from 'react';

export const ContactForm = (props: any) => {

    return (
        <div className={styles.popupBox}>
            <div className={styles.box}>
                <span className={styles.closeIcon} onClick={props.handleClose}>x</span>
                <p className={styles.popupText}>I am in the popup</p>
            </div>
        </div>
    )
}