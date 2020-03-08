import React from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import '../styles/Home.css';
import { findByLabelText } from '@testing-library/react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backdropOpen: false,

        }
    }
    
    sendMessage = () => {
        this.setState({backdropOpen: true})
    }

    render() {
        return(
            <div className='Main-view'>
                <Modal className='Message-modal' open={this.state.backdropOpen} onBackdropClick={() => this.setState({backdropOpen: false})}>
                    <div className='Message-box'>
                        <text>Send Message</text>
                        <div className='Name-field'>
                            <div className='Text-box' style={{paddingRight: 2}}>
                                <TextField color='secondary' variant='outlined' size='small'/>
                                <text>Full Name</text>
                            </div>
                            <div className='Text-box' style={{paddingLeft: 2}}>
                                <TextField color='secondary' variant='outlined' size='small'/>
                                <text>Last Name</text>
                            </div>
                        </div>
                        <TextField color='secondary' variant='outlined' size='small'/>
                        <TextField color='secondary' variant='outlined' size='small'/>
                        <TextField color='secondary' variant='outlined' size='small' multiline={true} rows={5}/>
                        <Button className='Button'  color='secondary' variant='outlined' style={{alignSelf: 'center'}}>Send</Button>
                    </div>
                </Modal>
                <h1>Want To Hire Me?</h1>
                <Button className='Button' variant='outlined' onClick={() => this.sendMessage()}>
                    Contact Me Today
                </Button>
            </div>
        )
    }
}

export default Home;