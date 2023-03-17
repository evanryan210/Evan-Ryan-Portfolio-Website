import * as styles from './styles';
import React, { MouseEventHandler, useState } from 'react';
import { Link, MessageBar, MessageBarButton, MessageBarType, TextField } from '@fluentui/react';
// import './form_styles.css';

export const runAsync = (runnable: ()=> Promise<void>) =>{
    runnable();
}

export const ContactForm = (props: any) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string>()
    const [open, setOpen] = useState<boolean>(false)

    const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setComment('');
        setIsSubmitted(false);
        setOpen(false)
        ev.preventDefault();
    }

    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validEmail = regex.test(email)

    const formSubmissionalert = (ev: any) => {
        if (validEmail) {
            runAsync(async () => {
                const requestURL = `/contactform?firstName=${firstName}&lastName=${lastName}email=${email}&comment=${comment}`
                console.log(requestURL)
                const response = await fetch(requestURL)
                if (response.ok) {
                    setIsSubmitted(true);
                    console.log('is ok')
                    const responseText = await response.text()
                    console.log(JSON.parse(responseText));
                    
                }
            })
            ev.preventDefault();
            setOpen(true)
        }
        else {
            setIsSubmitted(false);
            ev.preventDefault();
            alert('Please enter a valid email.')
        }
    }
    const SuccessExample = () => (
        <MessageBar
            dismissButtonAriaLabel="Close"
            messageBarType={MessageBarType.success}
            isMultiline={false}
            onDismiss={() => setOpen(false)}
        >
            Email sent successfully.
        </MessageBar>
        
      )
      
    return (
        <div className={styles.popupBox} onClick={(ev: any) => {
            if (ev.currentTarget === ev.target) {
                props.handleClose()
            }
            
        }}>
            <div className={styles.box} id='popUpBox'>
                {open && <SuccessExample />}
                <span className={styles.closeIcon} onClick={props.handleClose}>x</span>

                <h1 className={styles.contactFormTitle}>I'd love to hear from you!</h1>
                <form>
                    <div className={styles.contactFormContainer}>
                        <div className={styles.nameInputContainer}>
                            <TextField required label="First" onChange={(ev) => {
                                setFirstName(ev.currentTarget.value)
                            }} />
                            <TextField required label="Last" onChange={(ev) => {
                                setLastName(ev.currentTarget.value)
                            }} />
                        </div>

                        {/* Old method for invalid email warning */}
                        {/* <label htmlFor='email' style={{ marginLeft: '20px', color: 'red' }}>{email && !validEmail ? '*Please enter valid email' : <>&nbsp;</>}</label> */}

                        <TextField required label="Email" value={email} onGetErrorMessage={(value)=>{
                            if(value === 'error'){
                                return "you typed error"
                            }
                            
                        }} onChange={(ev) => {
                            setEmail(ev.currentTarget.value)
                        }} />
                        <TextField label="Comment" multiline rows={3} />

                        <div className={styles.buttonContainer}>
                            <button className='submitButton' type='reset' onClick={clearForm}><p>Clear</p></button>
                            <button className='submitButton' type="submit" onClick={formSubmissionalert}><p>Submit</p></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}