import PropTypes from "prop-types";
import React from 'react';

const Link = (props) => (
    <a onClick={props.onClick}> <span>{props.label}</span> </a>
)

export default Link;