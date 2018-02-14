import React from 'react';

export const Title = (props) => {
    const {className, styles, value} = props;

    return (
        <h2 className={className} style={styles}>
            {value}
        </h2>
    )
};