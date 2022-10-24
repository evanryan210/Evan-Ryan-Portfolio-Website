import { mergeStyles } from '@fluentui/merge-styles';
import React, { PropsWithChildren } from 'react';
import SkillsBar from './SkillsBar'
import * as styles from './styles';

export const Resume = (props: any) =>{
    return(
        <div className={styles.mainSectionContainer}>
            <p className = {styles.skillsHeader}>Skills</p>
            <SkillsBar />
            <p className = {styles.experienceHeader}>Experience</p>
            <div>
                <ResumeComponent title='Jr. Web Developer' companyName='OrangeSpark Solutions' date='Aug 2022-Present'>
                    Developed API integrated websites and web apps using React
                </ResumeComponent>
                <ResumeComponent title='Systems Engineer' companyName='Johnson Controls' date='Mar 2022-Jul 2022'>
                    Commissioned and initialized network-level controllers for HVAC systems in existing facilites.
                </ResumeComponent>
                <ResumeComponent title='Product Development and Project Management Associate' companyName='ArchSolar' date='May 2021-Mar 2022'>
                    Designed and managed the installation and construction of fully equipt greenhouse facilies for agricultural industry.
                </ResumeComponent>
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
            <footer className={styles.jobDescription}>{props.children}</footer>
        </div>
    )
}