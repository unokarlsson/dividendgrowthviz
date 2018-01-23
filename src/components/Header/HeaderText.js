import React from 'react';

const headerText = (props) => {

    const divStyle = {
        display: 'inline-block',
        padding: '0px 20px',
        marging: '0px'
    };

    const hStyle = {
        fontSize: '150%',
        padding: '0px',
        marging: '0px'
    };

    return (
        <div style={divStyle}>
            <p style={hStyle}>{props.text}</p>
        </div>
    );
}

export default headerText;