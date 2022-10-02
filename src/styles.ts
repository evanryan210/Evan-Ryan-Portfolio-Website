import { mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';
import { url } from 'inspector';
import placeholder from './placeholder-image.png'

const seafoam = '#87b6a7'
const mnBlue = '#3a506b'

export const App = mergeStyles({
    backgroundColor: seafoam,
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
});

export const navBarContainer = mergeStyles({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const navBarButton = mergeStyles({
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
    } ,
    alignItems: 'center',
})
export const mainSectionContainer = mergeStyles({
    width: '750px',
    justifyItems: 'center',
    margin: 'auto',
    height: '100%',
    backgroundColor: mnBlue,
})
export const name = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '500%',
    fontWeight: 'bold',
    letterSpacing: '15px',
    marginTop: '0px',
    paddingTop: '20px',
    marginBottom: '0px',
    color: 'blackn',
    textAlign: 'center',
})
export const jobTitle = mergeStyles({
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '150%',
})
export const profileImage = mergeStyles({
    borderRadius: '50%',
    width: '200px',
    display: 'flex',
    margin: 'auto',
})
export const bio = mergeStyles({
    width: '500px',
    display: 'flex',
    textAlign: 'justify',
    margin: 'auto',
})
export const projectList = mergeStyles({
    height: '200px',
    justifyContent: 'space-between',
    textAlign: 'center',
    listStyle: 'none',
    display: 'flex',
    listStyleType: 'none',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px',
    paddingInlineEnd: '40px',
    alignItems: 'center',
    
})
export const projectBubbles = mergeStyles({
  //  backgroundImage: 'url(https://designshack.net/wp-content/uploads/placeholder-image.png)',
    backgroundSize: 'cover',
    backgroundColor: '#04AA6D',
    backgroundPosition:'center',
    borderRadius: '50%',
    color: 'white',
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

export const sharpProject = mergeStyles({
    backgroundImage: 'url(https://camo.githubusercontent.com/28dc976bb1d28cf99d4650d672c7a60afbcc7c593f77af92d43535462c5364ba/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6c6f76656c6c2f7368617270406d61696e2f646f63732f696d6167652f73686172702d6c6f676f2e737667)',
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
    fontWeight: '1000'
})

export const osparkProject = mergeStyles({
    //backgroundImage: 'url(https://camo.githubusercontent.com/28dc976bb1d28cf99d4650d672c7a60afbcc7c593f77af92d43535462c5364ba/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6c6f76656c6c2f7368617270406d61696e2f646f63732f696d6167652f73686172702d6c6f676f2e737667)',
    backgroundSize: 'cover',
    backgroundColor: 'orange',
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
    fontWeight: '1000'
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
