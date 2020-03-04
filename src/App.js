import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import { AppBar, Tabs, Tab, Link } from '@material-ui/core';
import './App.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';

/* 
    grey-white: #f2f2f2
    orange: #f96d00
    dark grey: #393e46
    darker grey: #222831
*/

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.tab = 'home';
    }

    render() {
        return (
            <div className='Main-container'>
                <Router>
                    <AppBar>
                        <Tabs>
                            <Tab label='Home'/>
                            <Tab label='Blog'/>
                            <Tab label='Projects'/>
                            <Tab label='Resume'/>
                            <Tab label='About'/>
                        </Tabs>
                    </AppBar>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/blog'>
                            <Blog />
                        </Route>
                        <Route path='/projects'>
                            <Projects />
                        </Route>
                        <Route path='/resume'>
                            <Resume />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;