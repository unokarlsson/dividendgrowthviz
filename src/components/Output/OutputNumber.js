import React from 'react';

const outputNumber = (props) => {
    return (
        <div>
            <p>Value of {props.label} = {props.value}</p>
        </div>
    );
}

export default outputNumber;