import PropTypes from "prop-types";
import React from 'react';
import Icon from '../content/Icon'

export const Button = (props) => (
    <button onClick={props.onClick}>
        {props.label}
    </button>
)


export const IconButton = (props) => (
    <button onClick={props.onClick}>
       <Icon className={props.iconName}/>
    </button>
)