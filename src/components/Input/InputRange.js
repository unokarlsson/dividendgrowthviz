import React from 'react';

const inputRange = (props) => (
    <div>
        <label>{props.label} </label>
        <input onChange={props.onChange} value={props.value} type="range" min="3" max="50" step="1"/>
    </div>
);

export default inputRange;