import React from 'react';

const withClass = (WrappedComponent,style) => {
    return (props) => (
       <div style={style}><WrappedComponent/></div>
    )
}

export default withClass;