import React from 'react';

const headerText = (props) => {

    const headerTextStyle = {
        fontSize: '150%',
        padding: '0px 10px',
        marging: '0px'
    };

    return (
        <div style={headerTextStyle}>
            <p>{props.text}</p>
        </div>
    );
}

export default headerText;