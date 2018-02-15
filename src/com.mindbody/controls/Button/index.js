import PropTypes from "prop-types";
import React from 'react';
import Icon from '../../content/Icon'
import './style.css'
export const Button = (props) => (
    <button onClick={props.onClick}>
        {props.label}
    </button>
)


export const PlusButton = (props) => (
    <div className="circle-plus">
        <div className="circle">
            <div className="horizontal"></div>
            <div className="vertical"></div>
        </div>
    </div>
)

export const IconButton = (props) => (
    <div className="edit-button">
        <i className="edit-icon" />
    </div>
)