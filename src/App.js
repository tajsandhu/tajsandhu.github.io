import React from 'react';
import {
    Route, 
    Switch,
    withRouter
} from 'react-router-dom';
import { AppBar, Tabs, Tab, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';

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
                <ThemeProvider theme={main_theme}>
                    <AppBar position='sticky' color='primary'>
                        <Tabs value={this.tab}>
                            <Tab label='Home' value={'home'} onClick={() => this.tabHandler('/', 'home')}/>
                            <Tab label='Blog' value={'blog'} onClick={() => this.tabHandler('/blog', 'blog')}/>
                            <Tab label='Projects'  value={'projects'} onClick={() => this.tabHandler('/projects', 'projects')}/>
                            <Tab label='Resume'  value={'resume'} onClick={() => this.tabHandler('/resume', 'resume')}/>
                            <Tab label='About'  value={'about'} onClick={() => this.tabHandler('/about', 'about')}/>
                            <Tab label='Contact' value={'contact'} onClick={() => this.tabHandler('/contact', 'contact')}/>
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
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </div>
        )
    }
}

const main_theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#222831',
            light: '#393e46',
            dark: '#f96d00',
            contrastText: '#f2f2f2'
        },

        secondary: {
            main: '#f96d00',
            light: '#393e46',
            dark: '#222831',
            contrastText: '#f2f2f2',
        },
  
    }
});

export default withRouter(App);