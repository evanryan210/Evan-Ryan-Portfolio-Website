import { mergeStyles } from '@fluentui/merge-styles';
import React, { PropsWithChildren } from 'react';
import SkillsBar from './SkillsBar'
import * as styles from './styles';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Resume = (props: any) =>{
    return(
        <div className={styles.mainSectionContainer}>
            <p id="skills" className = {styles.skillsHeader}>Skills</p>
            <SkillsBar />
            <p className = {styles.experienceHeader}>Experience</p>
            <div>
                <ResumeComponent title='Jr. Web Developer' companyName='OrangeSpark Solutions' date='Aug 2022-Present'>
                    <li>Developed API integrated websites and web apps using React</li>
                </ResumeComponent>
                <ResumeComponent title='Systems Engineer' companyName='Johnson Controls' date='Mar 2022-Jul 2022'>
                    <li>Commissioned and initialized network-level controllers for HVAC systems in existing facilites.</li>
                </ResumeComponent>
                <ResumeComponent title='Product Development and Project Management Associate' companyName='ArchSolar' date='May 2021-Mar 2022'>
                    <li>Designed and managed the installation and construction of fully equipt greenhouse facilies for agricultural industry.</li>
                </ResumeComponent>
            </div>
            <div className={styles.downloadContainer}>
                <h1 className={styles.downloadResumeText}>Download full resume here: </h1><a className={styles.resumeDownloadButton}href="/EvanRyanResume.pdf" download><FontAwesomeIcon className={styles.downloadIcon} icon={faDownload} /></a>
            </div>
        </div>
    )
}

interface ResumeComponent{ 
    title: string,
    companyName: string,
    date: string,
}
const ResumeComponent = (props: PropsWithChildren<ResumeComponent>) => {
    return(
        <div className = {styles.jobContainer}>
            <header className={styles.jobHeader}>{props.title}</header>
            <section>{props.companyName}</section>
            <section className={styles.jobDate}>{props.date}</section>
            <footer className={styles.jobDescription}>
                <ul>
                    {props.children}
                </ul>
            </footer>
        </div>
    )
}