import PropTypes from "prop-types";
import React from 'react';

const TableRow = (props) => {
    const {data} = props;
    return(
        <div className="flex">
            {data && data.map((cell)=>(<span>{cell}</span>))}
        </div>)
}

export default TableRow;