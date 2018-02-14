import React from 'react';
import {Title} from '../../typography/index'
import {IconButton} from "../../controls/Button";
import BarChart from "../../content/charts/BarChart/index";
import Table from "../../content/Table/index";
const Panel = (props) => {
    const {chartData,
        tableData,
        title,
        icon,
        MoreLink} = props;



    return (<div>
                <header>
                    <Title value={title}/>
                    <div/>
                    <IconButton className={icon}/>
                </header>
                <BarChart data={chartData}/>
                <Table tableata={tableData}/>
                <footer>
                    {MoreLink}
                    <div/>
                </footer>
            </div>
    )
}


export default Panel