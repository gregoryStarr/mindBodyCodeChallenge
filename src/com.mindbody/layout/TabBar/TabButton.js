import React from 'react';
const TabButton = (props) => (
    <button onClick={props.onClick} className={props.selected && props.selected}>
        {props.label}
    </button>
);

export default TabButton;