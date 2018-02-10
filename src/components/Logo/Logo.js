import React from 'react';

import divGrowthVizLogo from '../../assets/images/dgv-logo.png';

const logo = (props) => {

    const logoStyle = {
        // backgroundColor: 'white',
        padding: '8px',
        height: '80px',
        boxSizing: 'border-box'
    }

    const logoImgStyle = {
        height: '100%',
        borderRadius: '40px'
    }

    return (
        <div style={logoStyle}>
            <img style={logoImgStyle} src={divGrowthVizLogo} alt="Dividend Growth Viz"/>
        </div>
    );
}

export default logo;