import React from 'react';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <h1>Resume</h1>
                <div>
                    <h2>Education</h2>
                    <div>
                        <h3>California State University Long Beach, Long Beach, CA</h3>
                        <text>Achieved Bachelor of Science in Computer Science, August 2017 - December 2019</text>
                    </div>
                    <div>
                        <h3>Modesto Junior College, Modesto, CA</h3>
                        <text>Majored in Computer Science, Transferred, August 2014 - May 2017</text>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <div>
                        <h3>Software Engineer Intern</h3>
                        <h4>Wellington Health Corp, Santa Clara, CA</h4>
                        <text>June 2019 - August 2019</text>
                    </div>
                    <div>
                        <h3>IT Intern</h3>
                        <h4>City of Modesto, Modesto, CA</h4>
                        <text>January 2017 - March 2017</text>
                    </div>
                </div>
                <div>
                    <h2>Programming Languages</h2>
                    <div>
                        <ul>
                            <li>C/C++</li>
                            <li>Java</li>
                            <li>C#</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Frameworks and Technologies</h2>
                    <div>
                        <ul>
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>Android Studio</li>
                            <li>Git</li>
                            <li>Amazon Web Services</li>
                        </ul>
                        <ul>
                            <li>Google Cloud Platform</li>
                            <li>.NET</li>
                            <li>Node.JS</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Skills</h2>
                    <div>
                        <ul>
                            <li>Algorithms</li>
                            <li>Relational Algebra</li>
                            <li>Agile Process</li>
                            <li>Scrum</li>
                        </ul>
                        <ul>
                            <li>Object Oriented Programming</li>
                            <li>Communication</li>
                            <li>Problem Solving</li>
                            <li>Teamwork</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;