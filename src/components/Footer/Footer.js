import React from 'react';
import FooterText from './FooterText';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const footer = (props) => {

    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        color : 'white',
        backgroundColor: '#4CAF50',
        padding: '0px 0px',
        margin: '0px 0px'
    };
    
    const footers = (
        <Aux>
            {props.footers.map((footer) => {
                return <FooterText key={footer.id} text={footer.text}/>
            })}
        </Aux>
    );

    return (
        <div style={footerStyle}>{footers}</div>
    );
}

export default footer;