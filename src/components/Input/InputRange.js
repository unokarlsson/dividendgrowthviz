import React from 'react';

const inputRange = (props) => {

    const inputRangeStyle = {
        display: 'table-cell',
        verticalAlign: 'middle',
        margin: '2px 5px'
    }

    const labelStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '75px'
    }

    const inputStyle = {
        verticalAlign: 'middle',
        width: '96px'
    }

    return (
        <div style={inputRangeStyle}>
            <label style={labelStyle}>{props.label} </label>
            <input 
                style={inputStyle}
                onChange={props.onChange}
                value={props.value}
                type="range"
                min="5"
                max="40"
                step="1"/>
        </div>
    )
}

export default inputRange;