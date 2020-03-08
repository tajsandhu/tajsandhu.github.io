import React from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import '../styles/Home.css';

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
                <Modal className='Message-modal' open={this.state.backdropOpen}>
                    <div className='Message-box'>
                        <text>Send Message</text>
                        <div>
                            <TextField color='secondary'/>
                            <TextField color='secondary'/>
                        </div>
                        <TextField color='secondary'/>
                        <TextField color='secondary'/>
                    </div>
                </Modal>
                <h1>Want To Hire Me?</h1>
                <Button className='Button' color='secondary' variant='outlined' onClick={() => this.sendMessage()}>
                    Contact Me Today
                </Button>
            </div>
        )
    }
}

export default Home;