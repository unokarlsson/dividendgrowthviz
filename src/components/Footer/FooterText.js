import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import withClass from '../../hoc/withClass';

const divStyle = {
    padding: '0px 0px',
    marging: '0px 0px'
};

const footerText = (props) => {

    const pStyle = {
        fontSize: '125%',
        padding: '0px 0px',
        marging: '0px 0px'
    };

    return (
        <Aux>
             <p style={pStyle}>{props.text}</p>
        </Aux>
    )
}

export default withClass(footerText, divStyle);