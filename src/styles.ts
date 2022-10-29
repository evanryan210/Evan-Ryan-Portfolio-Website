import { keyframes, mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';
import { url } from 'inspector';
import placeholder from './placeholder-image.png'
import generator from './images/generator.png'
import greenhouse from './images/greenhouse.png'
import magnet from './images/magnet.png'
import whale from './images/whale.png'
import './fonts.css'
import { faColumns } from '@fortawesome/free-solid-svg-icons';
const seafoam = '#87b6a7'
const mnBlue = '#3a506b'

export const App = mergeStyles({
    backgroundColor: '#bbc6e3',
    color: 'white'
})
export const header = mergeStyles({
    position: "sticky",
    top: '0',
    width: '100%',
    height: '50px',
    display: 'flex',
    backgroundColor: mnBlue,
    boxShadow: '0px 1px 10px #999',
    zIndex: '999'
});

export const navBarContainer = mergeStyles({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const navBarButton = mergeStyles({
    fontFamily: 'fieldwork',
    width: '100px',
    color: '#E1FFEE',
    display: 'flex',
    justifyContent:'center',
    textAlign: 'center',  
    textDecoration: 'none', 
    height: '100%',
    ':hover' : {
        borderBottom: '5px solid #A5F1E9',
        color: '#A5F1E9',
        cursor: 'pointer'
    } ,
    alignItems: 'center',
})
//Contact form pop-up
export const popupBox = mergeStyles({
    position: 'fixed',
    background: '#00000050',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
})
export const box = mergeStyles({
    position: 'relative',
    width: '70%',
    margin: '0 auto',
    height: "auto",
    maxHeight: "70vh",
    marginTop: 'calc(100vh - 85vh - 20px)',
    background: 'rgb(187, 198, 227)',
    borderRadius: "4px",
    padding: "20px",
    border: '1px solid #999',
    overflow: "auto",
})
export const closeIcon = mergeStyles({
    content: 'x',
    cursor: "pointer",
    position: "fixed",
    right: "calc(15% - 10px)",
    top: "calc(100vh - 85vh - 33px)",
    background: "#ededed",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    lineHeight: "20px",
    textAlign: "center",
    border: "1px solid #999",
    fontSize: "20px",
    color: 'black'
})
export const popupText = mergeStyles({
    color: 'black'
})


export const mainSectionContainer = mergeStyles({
    width: '75%',
    justifyItems: 'center',
    margin: 'auto',
    height: '100%',
    backgroundColor: mnBlue,
    boxShadow: 'rgba(0, 0, 0, 0.9) 1px 15px 15px',
    padding: '2rem',
})
export const projectIntroContainer = mergeStyles({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: '100px',
    color: 'rgb(225, 255, 238)',
    justifyContent: 'center',
})
export const mainSectionText = mergeStyles({
    margin: '0px 10px 0px 10px',
    lineHeight: '1.6'
})

export const name = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '9vw',
    fontWeight: 'bold',
    letterSpacing: '15px',
    marginTop: '0px',
    // paddingTop: '40px',
    // paddingBottom: '40px',
    marginBottom: '0px',
    color: 'rgb(225, 255, 238)',
    textAlign: 'center',
    '@media(max-width: 700px)':{
        fontSize: '200%',
    }
})
export const socialButtons = mergeStyles({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '16px 0px',
    'a': {
        padding: '8px',
        textDecoration: 'none',
        color: 'white',
    },
    'a:visited': {
       textDecoration: 'none', 
    },
    '& .tooltip':{
        cursor: 'pointer'
    }
})
export const jobTitle = mergeStyles({
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '150%',
    color: 'rgb(225, 255, 238)'
})
export const profileImage = mergeStyles({
    borderRadius: '50%',
    width: '40%',
    display: 'flex',
    margin: 'auto',
    border: '5px solid rgb(225, 255, 238)',
    marginTop: '20px',
    marginBottom: '20px'
    
})
export const bio = mergeStyles({
    maxWidth: '500px',
    display: 'flex',
    textAlign: 'justify',
    margin: 'auto',
})
export const sectionTitle = mergeStyles({
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    padding: '50px',
    color: 'rgb(225, 255, 238)'
})
export const sectionTitleContainer = mergeStyles({
    borderBottom: '5px solid rgb(225, 255, 238);',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
})

export const projectList = mergeStyles({
    // height: '200px',
    justifyContent: 'center',
    textAlign: 'center',
    listStyle: 'none',
    display: 'flex',
    listStyleType: 'none',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px',
    paddingInlineEnd: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',  
    opacity: '1', 
    'span':{
        fontWeight: '700',
        color: 'white',
        textShadow: '0 1px 0 #110d17, 0 -1px 0 #110d17, 1px 0 0 #110d17, -1px 0 0 #110d17',
    },
    //on mouse enter project bubble
    'a:hover':{
        'span':{
            opacity: '0',
            transition: 'opacity .5s'
            
        }
    },
    //mouse leave project bubble
    'a':{
        'span':{
            opacity: '1',
            transition: 'opacity .5s'
        }
    }
})
export const projectBubble = mergeStyles({
    backgroundSize: 'cover',
    backgroundColor: 'white',
    backgroundPosition:'center',
    borderRadius: '50%',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'flex',
    fontSize: '16px',
    margin: '40px 2px',
    alignItems: 'center',
    height: '125px',
    width: '125px',
    justifyContent: 'center',
    fontWeight: '1000',
})

export const sharpProject = mergeStyles([projectBubble,{
    backgroundImage: 'url(https://camo.githubusercontent.com/28dc976bb1d28cf99d4650d672c7a60afbcc7c593f77af92d43535462c5364ba/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6c6f76656c6c2f7368617270406d61696e2f646f63732f696d6167652f73686172702d6c6f676f2e737667)',
}])

export const osparkProject = mergeStyles([projectBubble,{
    backgroundColor: 'orange',
}])
export const generatorProject = mergeStyles([projectBubble,{
    backgroundImage: `url(${generator})`,
}])
export const greenhouseProject = mergeStyles([projectBubble,{
    backgroundImage: `url(${greenhouse})`,
}])
export const magnetProject = mergeStyles([projectBubble,{
    backgroundImage: `url(${magnet})`,
}])
export const whaleProject = mergeStyles([projectBubble,{
    backgroundImage: `url(${whale})`,
}])





//Resume styling
export const skillsHeader = mergeStyles([name, {
    margin: '30px 0'
}])
export const experienceHeader = mergeStyles([name, {
    margin: '80px 0',
    
}])
export const jobContainer = mergeStyles({
    width: '100%',
    marginBottom: '2rem',
    marginRight: '20px',
    padding: '10px 10px',
    backgroundColor: 'rgba(0,0,0,0.3)', 
    fontFamily: 'Josefin Sans, sans-serif',
    borderRadius: '8px',
    color: 'white'

})
export const jobHeader = mergeStyles({
    fontSize: '25px',
    fontWeight: '700',
    paddingBottom: '20px',
    fontFamily: 'fieldwork, sans-serif',
})

export const jobDate = mergeStyles({
    fontSize: '12px'
})
export const jobDescription = mergeStyles({
    paddingTop: '15px',
    marginLeft: '15px'
})
export const downloadResumeText = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
    textAlign: 'center',
    margin: '30px 0'
})
export const downloadContainer = mergeStyles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})
export const resumeDownloadButton = mergeStyles({
    color: 'white',
    height: '50px',
    width: '50px',
    textAlign: 'center',
})
export const downloadIcon = mergeStyles({
    fontSize: '25px',
    '&:hover':{
        color: 'rgb(225, 255, 238)',
        fontSize: '30px'
    }
})




//Contact form
export const contactFormTitle = mergeStyles({
    color: 'black',
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'fieldwork',
})
export const contactFormContainer = mergeStyles({
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    '& .feedback-input':{
        margin: '20px'
    },
    '& .submitButton': {
        margin: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '150px',
        height: '40px',
        border: 'none',
        outline: 'none',
        background: '#2f2f2f',
        color: '#fff',
        fontSize: '22px',
        borderRadius: '40px',
        textAlign: 'center',
        boxShadow: '0 6px 20px -5px rgba(0,0,0,0.4)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '@media(max-width: 700px)':{
            width: '75px',
            height: '20px',
            '& p':{
                fontSize: '12px'
            }
        },
    },
    'textarea':{
        height: '100px'
    },
    '@media(min-width: 828px)':{
        width: '50%',
    },
})
export const buttonContainer = mergeStyles({
    display: 'flex'
})
export const nameInputContainer = mergeStyles({
    display: 'flex',
    justifyContent: 'space-between',
    'input':{
    },
    '@media(max-width: 828px)': {
        display: 'flex',
        flexDirection: 'column',
    },
    '@media(min-width: 828px)': {
        'input': {
            width: '50%',
        }
    },
})






export const footer = mergeStyles({
    backgroundColor: mnBlue,
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    boxShadow: '0px 1px 10px #999',
})
export const footerEmail = mergeStyles({
    margin: '16px 0',
    'span':{
        padding: '20px',
        fontFamily: 'fieldwork, sans-serif',
        color: 'rgb(225, 255, 238)'
    },
    marginTop: '30px'
})
export const footerLocation = mergeStyles({
    margin: '16px 0',
    fontFamily: 'fieldwork, sans-serif',
    color: 'rgb(225, 255, 238)',
})


