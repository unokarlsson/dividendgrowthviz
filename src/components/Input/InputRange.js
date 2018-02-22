import React from 'react';

const inputRange = (props) => {

    const inputRangeStyle = {
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
        <div style={inputRangeStyle}>
            <label style={labelStyle}>{props.label} </label>
            <input 
                style={inputStyle}
                onChange={props.onChange}
                value={props.value}
                type="range"
                min="3"
                max="40"
                step="1"/>
        </div>
    )
}

export default inputRange;