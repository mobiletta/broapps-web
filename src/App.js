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
import { NotFound, Servers, Settings, Users, Trailer } from './pages';

/* var board = new DepartureBoard (document.getElementById ('test'), { rowCount: 5, letterCount: 32 }); 
			board.setValue (['14:30  SN 3205 VENICE      4-5 A ',
							 '14:50  SN 3737 MALAGA      4-5 A',
							 '14:50  fq 6918 DJERBA     11-  B',
							 '14:50  EZY4096 NICE       10-  A',
							 '15:55  KL 1726 AMSTERDAM   7-  A']);

			window.setTimeout (function () {
				board.setValue (['17:00  RJ  106 AMMAN       1-  B',
								'17:05  JAF6587 DJERBA     12-  B',
								'17:10  SN 2721 GENEVA      4-5 A',
								'17:15  FQ 6166 HURGHADA   11-  B',
								'17:20  8B 8161 OUJDA        -   ']);
			}, 18000); */

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
  {
    label: 'TRAILER',
    Icon: SettingsOption,
    path: '/trailer',
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
                  <Route path="/trailer" component={Trailer} />
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
