import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
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

    tabHandler = (route, tab) => {
        this.tab = tab;
        this.props.history.push(route);
    }

    render() {
        return (
            <div className='Main-container'>
                <AppBar position='sticky'>
                    <Tabs value={this.tab}>
                        <Tab label='Home' value={'home'} onClick={() => this.tabHandler('/', 'home')}/>
                        <Tab label='Blog' value={'blog'} onClick={() => this.tabHandler('/blog', 'blog')}/>
                        <Tab label='Projects'  value={'projects'} onClick={() => this.tabHandler('/projects', 'projects')}/>
                        <Tab label='Resume'  value={'resume'} onClick={() => this.tabHandler('/resume', 'resume')}/>
                        <Tab label='About'  value={'about'} onClick={() => this.tabHandler('/about', 'about')}/>
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
            </div>
        )
    }
}

export default withRouter(App);