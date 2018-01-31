import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const button = (props) => {
    return (
        <Aux>
            <button onClick={props.onClick} type='button'>{props.name}</button>
        </Aux>
    );
};

export default button;