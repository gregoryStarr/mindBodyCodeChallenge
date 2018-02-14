import React from 'react';
import TabButton from "./TabButton";
const TabBar = (props) => {
    const {tabData} = props;
    return(
        <ul>
            {tabData && tabData.map((tab) => (<TabButton key={Math.random(Math.random())} label={tab.label} onClick={()=>(tab.onClick)} selected={tab.selected} />))}
        </ul>
    )
}

export default TabBar