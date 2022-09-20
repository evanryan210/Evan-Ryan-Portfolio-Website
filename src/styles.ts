import { mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';

export const App = mergeStyles({
    backgroundColor: '#E1FFEE',
})
export const header = mergeStyles({
    position: "sticky",
    top: '0',
    width: '100%',
    height: '50px',
    display: 'flex',
    backgroundColor: '#7FBCD2',
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

export const name = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '500%',
    letterSpacing: '15px',
    marginTop: '10px',
    color: '#7FBCD2',
})
export const bio = mergeStyles({
    width: '500px',
    display: 'flex',
    textAlign: 'justify',
    margin: 'auto',
})

export const footer = mergeStyles({
    backgroundColor: '#7FBCD2',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    
})
