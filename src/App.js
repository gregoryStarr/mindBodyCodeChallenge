import React, { Component } from 'react';
import './App.scss';
import Page from "./com.mindbody/layout/Page";
import TabBar from "./com.mindbody/layout/TabBar";

const tabData = [
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
      <Page id="MB-App"
            className="container">
        <header>
            <span className="logo">
                Urban Yoga
            </span>
            <span className="spacer" />
            <TabBar tabData={tabData}/>
        </header>

      </Page>
    );
  }
}

export default App;
