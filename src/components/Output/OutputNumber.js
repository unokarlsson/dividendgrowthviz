import React from 'react';
import Aux from '../../hoc/Aux';

const outputNumber = (props) => {
    return (
        <Aux>
            <p>Value of {props.label} = {props.value}</p>
        </Aux>
    );
}

export default outputNumber;