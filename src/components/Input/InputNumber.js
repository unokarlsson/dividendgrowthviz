import React from 'react';

const inputNumber = (props) => {
    return(
        <div>
            <label>{props.label} </label>
            <input onChange={props.onChange}  value={props.value} type='number'/>
        </div>
    );
}

export default inputNumber;