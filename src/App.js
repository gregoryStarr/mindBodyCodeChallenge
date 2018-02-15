import React, { Component } from 'react';
import './App.css';
import './common.css';
import Page from "./com.mindbody/layout/Page";
import TabBar from "./com.mindbody/layout/TabBar";
import {IconButton} from "./com.mindbody/controls/Button/index";
import Panel from "./com.mindbody/layout/Panel";
import BarChart from "./com.mindbody/content/charts/BarChart";
import Table from "./com.mindbody/content/Table";
import {PlusButton} from "./com.mindbody/controls/Button";

const tabData = [
    {label: "Dashboard", onClick: ()=>(console.log("clicked"))},
    {label: "Sign In", onClick: ()=>(console.log("clicked"))},
    {label: "Classes", onClick: ()=>(console.log("clicked"))},
    {label: "WorkShops", onClick: ()=>(console.log("clicked"))},
    {label: "Appointments", onClick: ()=>(console.log("clicked"))},
    {label: "Client Home", onClick: ()=>(console.log("clicked"))},
    {label: "Retail", onClick: ()=>(console.log("clicked"))}
]

const chartData = {
    data:[]
   /* {label: "Dashboard", onClick: ()=>(console.log("clicked"))},
    {label: "Sign In", onClick: ()=>(console.log("clicked"))},
    {label: "Classes", onClick: ()=>(console.log("clicked"))},
    {label: "WorkShops", onClick: ()=>(console.log("clicked"))},
    {label: "Appointments", onClick: ()=>(console.log("clicked"))},
    {label: "Client Home", onClick: ()=>(console.log("clicked"))},
    {label: "Retail", onClick: ()=>(console.log("clicked"))}*/
}



const tableData = [
    {label: "Dashboard", onClick: ()=>(console.log("clicked"))},
    {label: "Sign In", onClick: ()=>(console.log("clicked"))},
    {label: "Classes", onClick: ()=>(console.log("clicked"))},
    {label: "WorkShops", onClick: ()=>(console.log("clicked"))},
    {label: "Appointments", onClick: ()=>(console.log("clicked"))},
    {label: "Client Home", onClick: ()=>(console.log("clicked"))},
    {label: "Retail", onClick: ()=>(console.log("clicked"))}
]

class App extends Component {
  render() {
    return (
        <Page width="100%" height="100%">
        <header className="flex space-between">
            <span className="logo">
                Urban Yoga
            </span>
            <span className="spacer" />
            <TabBar tabData={tabData}/>
        </header>
        <div className="flex space-around">
            <PlusButton />
            <div className="flex column">
                <div className="flex">
                    <Panel>
                        <BarChart chartData={chartData}/>
                        <Table tableData={tableData}/>
                    </Panel>
                </div>
                <Table tableData={{}} />
            </div>
        </div>
      </Page>
    );
  }
}

export default App;
