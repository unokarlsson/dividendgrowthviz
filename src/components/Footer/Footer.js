import React from 'react';
import FooterText from './FooterText';

const footer = (props) => {

    const outerDivStyle = {
        color : 'white',
        backgroundColor: 'blue',
        padding: '0px 0px',
        margin: '0px 0px'
    };

    const innerDivStyle = {
        textAlign: 'center',
        padding: '0px 0px',
        margin: '0px 0px'
    };
    
    const footers = (
        <div style={innerDivStyle}>
            {props.footers.map((footer) => {
                return <FooterText key={footer.id} text={footer.text}/>
            })}
        </div>
    );

    return (
        <div style={outerDivStyle}>
            {footers}
        </div>
    );
}

export default footer;