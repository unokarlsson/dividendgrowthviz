import React from 'react';
import HeaderText from './HeaderText';

const header = (props) => {

    const outerDivStyle = {
        color : 'white',
        backgroundColor: 'blue',
        padding: '0px',
        marging: '0px'
    };

    const innerDivStyle = {
        display: 'inline-block',
        padding: '0px',
        marging: '0px'
    };

    const headers = (
        <div style={innerDivStyle}>
            {props.headers.map((header) => {
                return <HeaderText key={header.id} text={header.text}/>
            })}
        </div>
    );

    return (
        <div style={outerDivStyle}>{headers}</div>
    )
}

export default header;