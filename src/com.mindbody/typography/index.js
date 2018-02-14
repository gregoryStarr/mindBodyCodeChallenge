import React from 'react';

const Title = (props) => {
    const {className, styles, value} = props;

    return (
        <h2 className={className} style={styles}>
            {value}
        </h2>
    )
};


export default Title;