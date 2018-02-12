import React from 'react';

const inputNumber = (props) => {

    const inputNuberStyle = {
        margin: '2px 5px'
    }

    const labelStyle = {
        display: 'inline-block',
        width: '76px'
    }

    const inputStyle = {
        width: '75px'
    }

    return (
        <div style={inputNuberStyle}>
            <label style={labelStyle}>{props.label} </label>
            <input style={inputStyle} onChange={props.onChange}  value={props.value} type='number'/>
        </div>
    );
}

export default inputNumber;