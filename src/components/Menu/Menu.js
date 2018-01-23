import React from 'react';
import MenuItem from './MenuItem';

const menu = (props) => {
    
    const menus = (
        <div>
            {props.menus.map((menuItem) => {
                return <MenuItem text={menuItem.text}/>
            })}
        </div>
    );

    return (
        <div>
            {menus}
        </div>
    );
}

export default menu;