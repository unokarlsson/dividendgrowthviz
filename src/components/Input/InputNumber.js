import React from 'react';

const inputNumber = (props) => {

    const inputNumberStyle = {
        margin: '2px 5px'
    }

    const labelStyle = {
        display: 'inline-block',
        width: '75px'
    }

    const inputStyle = {
        width: '100px'
    }

    return (
        <div style={inputNumberStyle}>
            <label style={labelStyle}>{props.label}</label>
            <input style={inputStyle} onChange={props.onChange}  value={props.value} type='number'/>
        </div>
    );
}

export default inputNumber;