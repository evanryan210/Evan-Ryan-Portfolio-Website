import { mergeStyles } from '@fluentui/merge-styles';
import React, {useRef} from 'react';
import * as styles from './styles';
import placeholder from './placeholder-image.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {Spark} from 'spark_app_v2'

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export const Projects = (props: any ) => {

  const parentRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className={styles.mainSectionContainer}>
      <div className={styles.projectIntroContainer}>
        <div id='projects' style={{height:'60px'}}></div>
        <p className={styles.skillsHeader}>Projects</p>
        <i>A collection of my past projects and experiences both <b>software</b> and <b>engineering</b> related.</i>
      </div>

      {/* Web projects section */}
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Web</h1>
      </div>
      <div className={styles.projectList}>
      <HtmlTooltip
          title={
            <React.Fragment>
              <Typography className={styles.tooltipTitle} color="inherit">Bookmark App</Typography>
              A web app created to help keep track of and consolidate all your favorite websites!
            </React.Fragment>
          }>

          <a href='https://github.com/evanryan210/bookmark_app' className={styles.bookmarkProject}>
            <span>Bookmark App</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Image Resizing App</Typography>
              A tool to help you resize images in large quantities. This CLI console app takes an image and a batch file of image sizes
              and returns a folder with all images of the specified sizes.
            </React.Fragment>
          }>

          <a href='https://github.com/evanryan210/sharp-resize' className={styles.sharpProject}>
            <span>Image Resizing App</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Orange Spark Website</Typography>
              A complete overhaul of the front and backend of my employer's old website, including a contact form that uses a RESTful API to communicate with SQL
              Server to store client data.
            </React.Fragment>
          }
        >
          <a href='https://github.com/OsparkSolutions/website-ospark' className={styles.osparkProject}>
            <span>Orange Spark Website</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Pulsing Sphere App</Typography>
              This React component allows the user to customize a pulsating sphere for use in their own applications by editing the number of shells, color, rotation speed,
              pulse speed, and scale.
            </React.Fragment>
          }
        >
          <a href='https://github.com/evanryan210/spark_app_v2' ref={parentRef} className={styles.sparkProject}>
            <span style={{zIndex: '99'}}>Pulsing Sphere App</span>
            <Spark parentElementRef={parentRef} height={500} width={500} pulseRate={30} scale={1000} />
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Hexadecimal Practice Tool</Typography>
              This app is a practice tool that test your ability to guess the hexademical value to its corresponding color.
            </React.Fragment>
          }
        >
          <a  href='https://github.com/evanryan210/hex-color-practice-tool' className={styles.hexaProject}>
            <span style={{zIndex: '99'}}>Hexadecimal Practice Tool</span>
          </a>
        </HtmlTooltip>

      </div>

      {/* Engineering projects section */}
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Engineering</h1>
      </div>
      <div className={styles.projectList}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Thermoelectric Generator</Typography>
              Designed a device to collect waste heat from the exhaust stacks of semi-trucks.  
              The projected fuel savings for this device is over $1,000 dollars annually, with
               a payback period of under 1 year.
            </React.Fragment>
          }
        >
          <a className={styles.generatorProject} href='https://digital.wpi.edu/pdfviewer/pc289n253'>
            <span>Thermoelectric Generator</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Greenhouse Design</Typography>
              Designed greenhouses in AutoCAD and Revit for clients in the agricultural industry.
               These fully integrated greenhouse models are custom built for each client's growing techniques and goals.
            </React.Fragment>
          }
        >
          <a className={styles.greenhouseProject}>
            <span>Greenhouse Design</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Electromagnetic Braking System</Typography>
              Designed a new braking mechanism for elevator cars. The model shown is approximately 3.5 inches
               in height and was created as a scaled-down version for easier manufacturing and prototyping.
                This mechanism allows for deviations in the elevator's guide rail with 2 degrees of rotational
                 freedom in the front assembly by using 4 bearings and an intermediate frame. 
            </React.Fragment>
          }
        >
          <a className={styles.magnetProject}>
            <span>Electromagnetic Braking System</span>
          </a>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Anti-litter Campaign: Whale Sculpture</Typography>
              A team of three other students and I collaborated on the research, design, and installment
               of a 30 feet long whale sculpture named 'Moby'. This project was meant to address the issue
                of coastal litter along beaches and to raise awareness of the harmful effects of plastic litter in the ocean.
            </React.Fragment>
          }
        >
          <a href='https://www.capecodtimes.com/story/news/2021/05/31/moby-nantucket-trash-whale-reminder-ocean-littering-dangers-sculpture-steel-wpi-dpw-surfside-beach/7457150002/' className={styles.whaleProject}>
            <span>Anti-litter Campaign: Whale Sculpture</span>
          </a>
        </HtmlTooltip>
      </div>
    </div>
  )

}