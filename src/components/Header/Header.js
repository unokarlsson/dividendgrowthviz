import React from 'react';
import HeaderText from './HeaderText';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const header = (props) => {

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        color : 'white',
        backgroundColor: 'blue',
        padding: '0px',
        marging: '0px'
    };

    const headers = (
        <Aux>
            {props.headers.map((header) => {
                return <HeaderText key={header.id} text={header.text}/>
            })}
        </Aux>
    );

    return (
        <div style={headerStyle}>{headers}</div>
    )
}

export default header;