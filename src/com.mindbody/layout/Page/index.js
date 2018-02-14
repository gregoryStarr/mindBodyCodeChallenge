import React from 'react'
import "./style.css"
const Page = (props) => {
    const {children, ...styleProps} = props;

    return (
       <div className="Page" style={{...styleProps}}>
           {children}
        </div>
    )
}

export default Page