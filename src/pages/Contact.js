import React from 'react';

import '../styles/Contact.css';

class Contact extends React.Component {
    
    componentDidMount = () => {
        this.props.updateTab('contact');
    }

    render() {
        return (
            <div className='Contact_container'>
                <h1 className='Contact_title'>Contact Me</h1>
                <div className='Contact_form'>
                    <h2 className='Contact_form_title'>Email</h2>
                    <label className='Contact'>sandhu_tajbir@outlook.com</label>
                </div>
                <div className='Contact_form'>
                    <h2 className='Contact_form_title'>Phone</h2>
                    <label className='Contact'>1-(209)-602-2444</label>
                </div>
                <div className='Contact_form'>
                    <h2 className='Contact_form_title'>LinkedIn</h2>
                    <a className='Contact' href='https://www.linkedin.com/in/tajbirsandhu/'>www.linkedin.com/in/tajbirsandhu</a>
                </div>
                <div className='Contact_form'>
                    <h2 className='Contact_form_title'>GitHub</h2>
                    <a className='Contact' href='https://github.com/SandManTaj'>github.com/SandManTaj</a>
                </div>
            </div>
        )
    }
}

export default Contact;