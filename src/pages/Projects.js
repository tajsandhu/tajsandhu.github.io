import React from 'react';

class Project extends React.Component {

    componentDidMount = () => {
        this.props.updateTab('projects');
    }
    
    render() {
        return(
            <div>
                <h1>Projects</h1>
                <div>
                    <h2>Web Apps</h2>
                    <div>
                        <h3>Personal Website</h3>
                        <a href='https://github.com/SandManTaj/Personal-Website'>Source Code</a>
                    </div>
                    <div>
                        <h3>uMove Web App</h3>
                        <a href='https://github.com/SandManTaj/uMove-Client'>Source Code</a>
                    </div>
                </div>
                <div>
                    <h2>Mobile Apps</h2>
                    <div>
                        <h3>CrossCam</h3>
                        <a href='https://github.com/SandManTaj/CrossCam'>Source Code</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;