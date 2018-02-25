import React from 'react';

const inputDropdown = (props) => {

    const options = [];
    for(let i=props.min;i<=props.max;i+=props.step) {
        i = Math.round((i)*10)/10
        let isSelected=false;
        if(i===props.value) {
            isSelected=true;
        }
        options.push(<option key={i} value={i} selected={isSelected}>{i}</option>);
    }
    console.log(options);
    
    const dropdownStyle = {
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
        width: '100px',
        height: '22px'
    }
    return (
        <div style={dropdownStyle}>
            <label style={labelStyle}>{props.label}</label>
            <select style={inputStyle} onChange={props.onChange}>
                {options}
            </select>
        </div>
    );

};

export default inputDropdown;