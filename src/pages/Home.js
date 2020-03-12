import React from 'react';
import { Button, Modal } from '@material-ui/core';
import Messager from './Messager.js';
import Background from '../res/HomeBackground.jpg';
import '../styles/Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backdropOpen: false,
        };
    }
    
    openMessager = () => {
        this.setState({backdropOpen: true});
    }

    closeMessager = () => {
        this.setState({backdropOpen: false});
    }

    render() {
        return(
            <div className='Main-view'>
                <div className='Background-image'></div>
                <Modal className='Message-modal' open={this.state.backdropOpen} onBackdropClick={() => this.setState({backdropOpen: false})}>
                    <Messager closingFunction={this.closeMessager}/>
                </Modal>
                <div className='Contact-view'>
                    <h1 className='Main-header'>Want To Get In Touch?</h1>
                    <Button className='Button' variant='outlined' onClick={() => this.openMessager()}>
                        Contact Me Today
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home;