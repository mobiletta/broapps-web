// @flow

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

import { Box, Grommet } from "grommet";
import {
  Grommet as GrommetIcon,
  Group,
  SettingsOption,
  Servers as ServersIcon
} from "grommet-icons";

import { theme } from "./theme";
import Sidebar from "./components/nav/Sidebar";
import { NotFound, Servers, Settings, Users } from "./pages";

const userSession = {
  user: {
    name: "Brian Weber",
    thumbnail: "//s.gravatar.com/avatar/2422eeb4b33f088b4c3927c7d9f59528?s=80"
  },
  items: [
    {
      label: "Logout",
      href: "#"
    }
  ]
};

const items = [
  {
    label: "NFL",
    Icon: ServersIcon,
    path: "/servers"
  },
  {
    label: "MLB",
    Icon: Group,
    path: "/users"
  },
  {
    label: "NCAA",
    Icon: SettingsOption,
    path: "/settings"
  }
];


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Grommet theme={theme} full>
            <Navbar />
            <Box direction="row" fill>
              <Sidebar
                appIcon={<GrommetIcon color="brand" />}
                appName="Bro Leans"
                items={items}
                userSession={userSession}
              />
              <Box flex>
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/servers" component={Servers} />
                  <Route path="/users" component={Users} />
                  <Route path="/settings" component={Settings} />
                  <Route path='/project/:id' component={ProjectDetails} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/create' component={CreateProject} />
                  <Route component={NotFound} />
                </Switch>
              </Box>
            </Box>
          </Grommet>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
