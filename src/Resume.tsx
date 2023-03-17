import { mergeStyles } from '@fluentui/merge-styles';
import React, { PropsWithChildren } from 'react';
import SkillsBar from './SkillsBar'
import * as styles from './styles';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Resume = (props: any) => {
    return (
        <div className={styles.mainSectionContainer}>
            <div id='skills' style={{ height: '100px' }}></div>
            <p className={styles.skillsHeader}>Skills</p>
            <SkillsBar />
            <div id='resume' style={{ height: '2px' }}></div>
            <p className={styles.experienceHeader}>Experience</p>
            <div className={styles.experienceContainer}>
                <ResumeComponent title='Jr. Web Developer' companyName='OrangeSpark Solutions' date='Aug 2022-Present'>
                    <li>Developed API integrated websites and web apps</li>
                    <li>Worked with modern web development technologies such as React.js, Node.js, Typescript, JavaScript, CSS, HTML5.</li>
                    <li>Frequent use of version control tools such as GitHub to manage each of my projects.</li>
                    <li>Worked with different APIs such as the Google Drive and Paypal to implement useful features into web apps like being able to import and export from a user's Google drive, or checkout seamlessly with Paypal's JavaScript SDK.</li>
                    
                </ResumeComponent>
                <ResumeComponent title='Systems Engineer' companyName='Johnson Controls' date='Mar 2022-Jul 2022'>
                    <li>Commissioned and initialized network-level controllers for HVAC systems in existing facilites.</li>
                
                </ResumeComponent>
                <ResumeComponent title='Product Development and Project Management Associate' companyName='ArchSolar' date='May 2021-Mar 2022'>
                    <li>Designed and managed the installation and construction of fully equipped greenhouse facilies for agricultural industry.</li>
                </ResumeComponent>
            </div>
            


            <div className={styles.sectionTitleContainer}>
                <h1 className={styles.sectionTitle}>Certifications</h1>
            </div>
            <div className={styles.projectList}>
                <a href='https://www.codecademy.com/profiles/EvanRyan/certificates/9a5bb1fc45b4281af1fffec93b0aaf05' className={styles.cssBubble}>
                </a>

                <a href='https://www.codecademy.com/profiles/EvanRyan/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7' className={styles.htmlBubble}>                </a>
                <a href='https://www.codecademy.com/profiles/EvanRyan/certificates/705dcb15de0da4dd9d9fc4f3274b430e' className={styles.jsBubble}>                   </a>
            </div>
            <div className={styles.downloadContainer}>
                <h1 className={styles.downloadResumeText}>Download full resume here: </h1><a className={styles.resumeDownloadButton} href="/Evan Ryan Resume v0.1.6.pdf" download><FontAwesomeIcon className={styles.downloadIcon} icon={faDownload} /></a>
            </div>
        </div>
    )
}

interface ResumeComponent {
    title: string,
    companyName: string,
    date: string,
}
const ResumeComponent = (props: PropsWithChildren<ResumeComponent>) => {
    return (
        <div className={styles.jobContainer}>
            <header className={styles.jobHeader}>{props.title}</header>
            <section>{props.companyName}</section>
            <section className={styles.jobDate}>{props.date}</section>
            <footer className={styles.jobDescription}>
                <ul className={styles.listContainer}>
                    {props.children}
                </ul>
            </footer>
        </div>
    )
}