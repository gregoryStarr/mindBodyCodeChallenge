import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Table from "../com.mindbody/content/Table/index";
import Icon from "../com.mindbody/content/Icon";
import BarChart from "../com.mindbody/content/charts/BarChart/index";

import {Button, IconButton} from "../com.mindbody/controls/Button";
import Link from "../com.mindbody/controls/Link";
import Panel from "../com.mindbody/layout/Panel/index";
import Page from "../com.mindbody/layout/Page/index";
import TabBar from "../com.mindbody/layout/TabBar/index";

storiesOf('Content Components', module)
    .add('Icon', () => <Icon className="FA-home"/>)
    .add('Table', () => <Table tableData={{}}/>)
    .add('BarChart', () => <BarChart tableData={{}}/>);

storiesOf('interactive Components', module)
    .add('Button', () => <Button label="Button label" onClick={action('onClick')}/>)
    .add('IconButton', () => <IconButton iconName="FA-plus" onClick={action('onClick')}/>)
    .add('Link', () => <Link label="link label" onClick={action('onClick')}/>);

storiesOf('Layout Components', module)
    .add('Page', () => <Page backgroundColor="red" width="100%" height="100%"><h1>Page Component with an H1</h1></Page>)
    .add('Panel', () => <Panel chartData={{}}
                               tableData={{}}
                               title="Panel"
                               icon="FA-pencil"
                               MoreLink={<Link label="More" onClick={action('more link clicked')}/>}
    />)
    .add('TabBar', () => <TabBar tabData={[
            {label: "Test 1", onClick: action("Clicked a Tab")},
            {label: "Test 2", onClick: action("Clicked a Tab")},
            {label: "Test 3", onClick: action("Clicked a Tab")}
        ]}
        />
    )