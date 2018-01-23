import React from 'react';

const footerText = (props) => {

    const divStyle = {
        padding: '0px 0px',
        marging: '0px 0px'
    };

    const pStyle = {
        fontSize: '125%',
        padding: '0px 0px',
        marging: '0px 0px'
    };

    return (
        <div style={divStyle}>
            <p style={pStyle}>{props.text}</p>
        </div>
    )
}

export default footerText;