import React from 'react';
import '../styles/Project.css';
import PersonalWebsite from '../res/personal-website-cap.png';
import CrossCamLogin from '../res/CrossCam-login.png';
import CrossCamCamera from '../res/CrossCam-camera.png';
import CrossCamGallery from '../res/CrossCam-gallery.png';

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
                    <div className='Project'>
                        <a className='Project_link' href='https://github.com/SandManTaj/SandManTaj.github.io'>Personal Website</a>
                        <img className='Site_image' src={PersonalWebsite}/>
                    </div>
                    <hr className='Small_divider'/>
                    <div className='Project'>
                        <a className='Project_link' href='https://github.com/SandManTaj/uMove-Client'>uMove WebApp</a>
                    </div>
                </div>
                <div>
                    <h2 className='Project_group_title'>Mobile Apps</h2>
                    <hr className='Project_Divider'/>
                    <div className='Project'>
                        <a className='Project_link' href='https://github.com/SandManTaj/CrossCam'>CrossCam</a>
                        <div className='Mobile_images'>
                            <img className='Mobile_image' src={CrossCamLogin}/>
                            <img className='Mobile_image' src={CrossCamCamera}/>
                            <img className='Mobile_image' src={CrossCamGallery}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;