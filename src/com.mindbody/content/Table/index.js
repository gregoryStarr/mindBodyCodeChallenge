import PropTypes from "prop-types";
import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {

    return(<div>
        <header>
            <div>{props.label}</div>
        </header>
        <div>
            {props.tableData.rows && props.tableData.rows.map((row)=>(<TableRow {...row} />))}
        </div>
    </div>)
}


/*Table.propTypes = {
    tableData: PropTypes.objectOf(PropTypes.shape({
            lable:PropTypes.string,
            rows:PropTypes.arrayOf(PropTypes.shape({
                value:Proptypes.string
            }))
        })).isRequired
}*/

export default Table