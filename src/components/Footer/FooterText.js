import React from 'react';

const footerText = (props) => {

    const footerTextStyle = {
        fontSize: '125%',
        padding: '0px 10px',
        marging: '0px 0px'
    };

    return (
        <div style={footerTextStyle}>
             <p>{props.text}</p>
        </div>
    );
}

export default footerText;