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
            currentTab: 'home',
        }
    }

    updateTab = (tab) => {
        this.setState({currentTab: tab});
    }

    render() {
        return (
            <div className='Main-container'>
                <ThemeProvider theme={main_theme}>
                    <AppBar position='fixed' color='primary'>
                        <Tabs value={this.state.currentTab}>
                            <Tab label='Home' value={'home'} onClick={() => this.props.history.push('/')}/>
                            <Tab label='Blog' value={'blog'} onClick={() => this.props.history.push('/blog')}/>
                            <Tab label='Projects'  value={'projects'} onClick={() => this.props.history.push('/projects')}/>
                            <Tab label='Resume'  value={'resume'} onClick={() => this.props.history.push('/resume')}/>
                            <Tab label='About'  value={'about'} onClick={() => this.props.history.push('/about')}/>
                            <Tab label='Contact' value={'contact'} onClick={() => this.props.history.push('/contact')}/>
                        </Tabs>
                    </AppBar>
                    <Switch>
                        <Route exact path='/'>
                            <Home updateTab={this.updateTab}/>
                        </Route>
                        <Route path='/blog'>
                            <Blog updateTab={this.updateTab}/>
                        </Route>
                        <Route path='/projects'>
                            <Projects updateTab={this.updateTab}/>
                        </Route>
                        <Route path='/resume'>
                            <Resume updateTab={this.updateTab}/>
                        </Route>
                        <Route path='/about'>
                            <About updateTab={this.updateTab}/>
                        </Route>
                        <Route path='/contact'>
                            <Contact updateTab={this.updateTab}/>
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