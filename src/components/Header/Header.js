import React from 'react';
import HeaderText from './HeaderText';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const header = (props) => {

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        color : 'white',
        backgroundColor: '#4CAF50',
        padding: '0',
        marging: '0'
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