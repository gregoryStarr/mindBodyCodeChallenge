import React from 'react';
import {Title} from '../../typography/index'
import {IconButton} from "../../controls/Button/index";
const Panel = (props) => {
    const {
        title,
        icon,
        MoreLink} = props;

    return (<div>
                <header>
                    <Title value={title}/>
                    <div/>
                    <IconButton className={icon}/>
                </header>
                { props.children }
                <footer>
                    {MoreLink}
                    <div/>
                </footer>
            </div>
    )
}


export default Panel