import React from "react";
import './styles_skills.css';

function SkillsBar () {
   return (
       <div className="container">
           {/* <h1 className="title-text">Proficiencies</h1> */}

           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JavaScript</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Typescript</span>
               <div className="skill-bar">
                   <span className="skill-per typescript">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">SQL Server</span>
               <div className="skill-bar">
                   <span className="skill-per sqlserver">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
       </div>
   )
}

export default SkillsBar;