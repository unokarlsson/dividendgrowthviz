import React from 'react';
import HeaderText from './HeaderText';
import Logo from '../Logo/Logo';
// import Aux from '../../hoc/Auxiliary/Auxiliary';

const header = (props) => {

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        color : 'white',
        backgroundColor: '#4CAF50',
        padding: '0',
        marging: '0'
    };

    return (
        <div style={headerStyle}>
            <Logo/>
            <HeaderText text={props.title}/>
            <HeaderText text='Menus'/>
        </div>
    )
}

export default header;