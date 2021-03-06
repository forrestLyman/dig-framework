import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "demo/components/pages/Dashboard/Dashboard";
import Layout from "demo/components/ui/Layout/Layout";
import FormDemo from "demo/components/pages/FormDemo/FormDemo";
import SidebarListDemo from "demo/components/pages/SidebarListDemo/SidebarListDemo";
import TableDemo from "demo/components/pages/TableDemo/TableDemo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/demos/form" component={FormDemo} />
            <Route exact path="/demos/sidebar-list" component={SidebarListDemo} />
            <Route exact path="/demos/table" component={TableDemo} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
