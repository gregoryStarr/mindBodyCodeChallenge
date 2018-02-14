import React from 'react'
const Page = (props) => {
    const {children, ...styleProps} = props;

    return (
       <div style={{...styleProps}}>
           {children}
        </div>
    )
}

export default Page