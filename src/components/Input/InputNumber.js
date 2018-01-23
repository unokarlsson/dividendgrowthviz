import React from 'react';

const inputNumber = (props) => {
    return(
        <div>
            <label>{props.label} </label>
            <input onChange={props.onChange} type='text' value={props.value}/>
        </div>
    );
}

export default inputNumber;