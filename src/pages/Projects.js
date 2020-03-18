import React from 'react';
import '../styles/Project.css'

class Project extends React.Component {

    componentDidMount = () => {
        this.props.updateTab('projects');
    }
    
    render() {
        return(
            <div className='Project_container'>
                <h1 className='Project_main_title'>Projects</h1>
                <div>
                    <h2 className='Project_group_title'>Web Apps</h2>
                    <hr className='Project_Divider'/>
                    <div>
                        <h3>Personal Website</h3>
                        <a className='Project_link' href='https://github.com/SandManTaj/SandManTaj.github.io'>Source Code</a>
                    </div>
                    <div>
                        <h3>uMove Web App</h3>
                        <a className='Project_link' href='https://github.com/SandManTaj/uMove-Client'>Source Code</a>
                    </div>
                </div>
                <div>
                    <h2 className='Project_group_title'>Mobile Apps</h2>
                    <hr className='Project_Divider'/>
                    <div>
                        <h3>CrossCam</h3>
                        <a className='Project_link' href='https://github.com/SandManTaj/CrossCam'>Source Code</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;