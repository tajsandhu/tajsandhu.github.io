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
                <Modal className='Message-modal' open={this.state.backdropOpen} onBackdropClick={() => this.setState({backdropOpen: false})}>
                    <div className='Message-box'>
                        <h1 className='Main-title'>Send Message</h1>
                        <div className='Vertical-field'>
                            <div className='Horizontal-field'>
                                <div className='Vertical-field' style={{paddingRight: 2}}>
                                    <TextField color='secondary' variant='outlined' size='small' label='First Name'/>
                                </div>
                                <div className='Vertical-field' style={{paddingLeft: 2}}>
                                    <TextField color='secondary' variant='outlined' size='small' label='Last Name'/>
                                </div>
                            </div>
                        </div>
                        <div className='Vertical-field'>
                            <TextField color='secondary' variant='outlined' size='small' label='Email'/>
                        </div>
                        <div className='Vertical-field'>
                            <TextField color='secondary' variant='outlined' size='small' label='Company'/>
                        </div>
                        <div className='Vertical-field'>
                            <TextField color='secondary' variant='outlined' size='small' multiline={true} rows={5} label='Message'/>
                        </div>
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