import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/auth/Home';
import CreateProject from './components/projects/CreateProject';
import OddsList from './components/odds/OddsList';

import { Box, Grommet } from 'grommet';
import { Grommet as GrommetIcon, Group, SettingsOption, Servers as ServersIcon } from 'grommet-icons';

import Sidebar from './components/nav/Sidebar';
import { NotFound, Servers, Settings, Users } from './pages';

const mediaBackgroundTheme = {
  grommet: {
    extend: `
      background: rgba(255,255,255,0);
    `,
  },
};

const userSession = {
  user: {
    name: 'Brian Weber',
    thumbnail: '//s.gravatar.com/avatar/2422eeb4b33f088b4c3927c7d9f59528?s=80',
  },
  items: [
    {
      label: 'Logout',
      href: '#',
    },
  ],
};

const items = [
  {
    label: 'NFL',
    Icon: ServersIcon,
    path: '/servers',
  },
  {
    label: 'NBA',
    Icon: Group,
    path: '/users',
  },
  {
    label: 'RACING',
    Icon: SettingsOption,
    path: '/settings',
  },
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Grommet theme={mediaBackgroundTheme} full>
            <Navbar />
            <Box direction="row" fill>
              <Sidebar appIcon={<GrommetIcon color="brand" />} appName="Bro Leans" items={items} userSession={userSession} />
              <Box flex>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/servers" component={Servers} />
                  {/* was template server page */}
                  <Route path="/users" component={Users} /> {/* was template user page */}
                  <Route path="/settings" component={Settings} /> {/* was template settings page */}
                  <Route path="/project/:id" component={ProjectDetails} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/create" component={CreateProject} />
                  <Route path="/odds" component={OddsList} />
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
