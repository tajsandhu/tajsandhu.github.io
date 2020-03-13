import React from 'react';

class Contact extends React.Component {
    
    componentDidMount = () => {
        this.props.updateTab('contact');
    }

    render() {
        return (
            <div>
                <h1>Get In Touch With Me</h1>
                <div>
                    <h2>Email</h2>
                    <label>sandhu_tajbir@outlook.com</label>
                </div>
                <div>
                    <h2>Phone</h2>
                    <label>1-(209)-602-2444</label>
                </div>
                <div>
                    <h2>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/tajbirsandhu/'>www.linkedin.com/in/tajbirsandhu</a>
                </div>
                <div>
                    <h2>GitHub</h2>
                    <a href='https://github.com/SandManTaj'>github.com/SandManTaj</a>
                </div>
            </div>
        )
    }
}

export default Contact;