import PropTypes from "prop-types";
import React from 'react';

const Table = (title, icon) => (
    <div>
        <header>
            <div>Headers Here</div>
        </header>
        <div>
            rows here
        </div>
    </div>
)


Table.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            startValue: PropTypes.number,
            startColor:PropTypes.string,
            endValue: PropTypes.number,
            endColor: PropTypes.string,
        })).isRequired
}

export default Table