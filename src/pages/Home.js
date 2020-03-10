import React from 'react';
import { Button, Modal } from '@material-ui/core';
import Messager from './Messager.js';
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
                <Modal className='Message-modal' open={this.state.backdropOpen} onBackdropClick={() => this.setState({backdropOpen: false})}>
                    <Messager closingFunction={this.closeMessager}/>
                </Modal>
                <h1>Want To Hire Me?</h1>
                <Button className='Button' variant='outlined' onClick={() => this.openMessager()}>
                    Contact Me Today
                </Button>
            </div>
        )
    }
}

export default Home;