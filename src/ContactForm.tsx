import * as styles from './styles';
import React, { MouseEventHandler, useState } from 'react';
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

    const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setComment('');
        setIsSubmitted(false);
        ev.preventDefault();
    }

    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validEmail = regex.test(email)

    const formSubmissionalert = (ev: any) => {
        if (validEmail) {
            alert(`You should recieve an email to ${email}`)
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
        }
        else {
            setIsSubmitted(false);
            ev.preventDefault();
            alert('Please enter a valid email.')
        }
    }
    
    return (
        <div className={styles.popupBox} onClick={(ev: any) => {
            if (ev.currentTarget === ev.target) {
                props.handleClose()
            }
            
        }}>
            <div className={styles.box} id='popUpBox'>
                <span className={styles.closeIcon} onClick={props.handleClose}>x</span>

                <h1 className={styles.contactFormTitle}>I'd love to hear from you!</h1>
                <form>
                    <div className={styles.contactFormContainer}>
                        <div className={styles.nameInputContainer}>                            
                            <input id='firstName' required name="firstName" type="text" className="feedback-input" placeholder="First Name" value={firstName} onInput={(ev) => {
                                setFirstName(ev.currentTarget.value)
                            }} />                            
                            <input required name="lastName" type="text" className="feedback-input" placeholder="Last Name" value={lastName} onInput={(ev) => {
                                setLastName(ev.currentTarget.value)
                            }} />
                        </div>
                         <label htmlFor='email' style={{marginLeft: '20px'}}>{email && !validEmail ? '*please enter valid email' : <>&nbsp;</>}</label>
                        <input required id='email' name="email" type="text" className="feedback-input" placeholder="Email" value={email} onInput={(ev) => {
                            setEmail(ev.currentTarget.value)
                        }} />
                        <textarea id='comment' name="text" className="feedback-input" placeholder="Comment" value={comment} onInput={(ev) => {
                            setComment(ev.currentTarget.value)
                        }}></textarea>
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