import React from 'react';
import {TabButton} from "../controls/Button";
const TabBar = (props) => {
    const {tabData, selected} = props;
    return(
        <ul>
            {tabData && tabData.map((tab) => (<TabButton label={tab.label} onClick={tab.onClick} selected={tab.selected} />))}
        </ul>
    )
}

export default TabBar