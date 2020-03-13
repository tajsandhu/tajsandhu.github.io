import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/Resume.css';

class Resume extends React.Component {

    render() {
        return(
            <div className='Resume_container'>
                <h1 className='Resume_title'>Resume</h1>
                <hr className='Divider'/>
                <div className='Resume_category'>
                    <h2 className='Resume_category_title'>Education</h2>
                    <div className='Resume_category_body'>
                        <div>
                            <h3>California State University Long Beach, Long Beach, CA</h3>
                            <label className='Sub_text'>Achieved Bachelor of Science in Computer Science, August 2017 - December 2019</label>
                        </div>
                        <div>
                            <h3>Modesto Junior College, Modesto, CA</h3>
                            <label className='Sub_text'>Majored in Computer Science, Transferred, August 2014 - May 2017</label>
                        </div>
                    </div>
                </div>
                <hr className='Divider'/>
                <div className='Resume_category'>
                    <h2 className='Resume_category_title'>Experience</h2>
                    <div className='Resume_category_body'>
                        <div>
                            <h3>Software Engineer Intern</h3>
                            <h4>Wellington Health Corp, Santa Clara, CA</h4>
                            <label className='Sub_text'>June 2019 - August 2019</label>
                        </div>
                        <div>
                            <h3>IT Intern</h3>
                            <h4>City of Modesto, Modesto, CA</h4>
                            <label className='Sub_text'>January 2017 - March 2017</label>
                        </div>
                    </div>
                </div>
                <hr className='Divider'/>
                <div className='Resume_category'>
                    <h2 className='Resume_category_title'>Programming <br/> Languages</h2>
                    <div>
                        <div className='Skill_list'>
                            <ul className='List_elements'>
                                <li>C/C++</li>
                                <li>Java</li>
                                <li>C#</li>
                                <li>Python</li>
                            </ul>
                            <ul className='List_elements'>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='Divider'/>
                <div className='Resume_category'>
                    <h2 className='Resume_category_title'>Frameworks and <br/> Technologies</h2>
                    <div>
                        <div className='Skill_list'>
                            <ul className='List_elements'>
                                <li>ReactJS</li>
                                <li>React Native</li>
                                <li>Android Studio</li>
                                <li>Git</li>
                                <li>Amazon Web Services</li>
                            </ul>
                            <ul className='List_elements'>
                                <li>Google Cloud Platform</li>
                                <li>.NET</li>
                                <li>Node.JS</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='Divider'/>
                <div className='Resume_category'>
                    <h2 className='Resume_category_title'>Skills</h2>
                    <div className='Second_level'>
                        <div className='Skill_list'>
                            <ul className='List_elements'>
                                <li>Algorithms</li>
                                <li>Relational Algebra</li>
                                <li>Agile Process</li>
                                <li>Scrum</li>
                            </ul>
                            <ul className='List_elements'>
                                <li>Object Oriented Programming</li>
                                <li>Communication</li>
                                <li>Problem Solving</li>
                                <li>Teamwork</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='Divider'/>
                <Button className='Button' color='secondary' variant='outlined' size='large' href='Tajbir_Sandhu_Resume.pdf' download>
                    Want A Copy?
                </Button>
            </div>
        )
    }
}

export default Resume;