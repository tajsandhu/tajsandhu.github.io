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
                            <label className='Label-text'>Full Name</label>
                            <div className='Horizontal-field'>
                                <div className='Vertical-field' style={{paddingRight: 2}}>
                                    <TextField color='secondary' variant='outlined' size='small'/>
                                    <label className='Sub-text'>First Name</label>
                                </div>
                                <div className='Vertical-field' style={{paddingLeft: 2}}>
                                    <TextField color='secondary' variant='outlined' size='small'/>
                                    <label className='Sub-text'>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className='Vertical-field'>
                            <label className='Label-text'>Email</label>
                            <TextField color='secondary' variant='outlined' size='small'/>
                        </div>
                        <div className='Vertical-field'>
                            <label className='Label-text'>Company</label>
                            <TextField color='secondary' variant='outlined' size='small'/>
                        </div>
                        <div className='Vertical-field'>
                            <label className='Label-text'>Message</label>
                            <TextField color='secondary' variant='outlined' size='small' multiline={true} rows={5}/>
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