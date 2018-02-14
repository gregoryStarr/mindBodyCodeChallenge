import PropTypes from "prop-types";
import React from 'react';
const BarChart = (chartData) => (
    <div>
        Chart Here
    </div>
)


BarChart.propTypes = {
    chartData: PropTypes.shape({
        heading: PropTypes.string,
        data:  PropTypes.arrayOf(PropTypes.shape({
            label:      PropTypes.string,
            startValue: PropTypes.number,
            startColor: PropTypes.string,
            endValue:   PropTypes.number,
            endColor:   PropTypes.string,
        })).isRequired
    }).isRequired,
}

export default BarChart