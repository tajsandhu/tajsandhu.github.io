import React from 'react';
import { Button, TextField } from '@material-ui/core';
import * as emailjs from 'emailjs-com';
import '../styles/Messager.css';
import { MessageService } from '../res/config.js';

class Messager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: '',
        }
    }

    //uses EmailJS to directly send me messages
    sendMessage = () => {
        //creates a template consistant with the custom template created with EmailJS
        let templateParams = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            company: this.state.company,
            message: this.state.message,
        };
        
        //Sends the message to one of my email address
        /* TODO: implement error handling */
        emailjs.send(
            MessageService.type,
            MessageService.template,
            templateParams,
            MessageService.user_id,
        )

        this.props.closingFunction();
    }

    render() {
        return (
            <div className='Message-box'>
                <h1 className='Main-title'>Send Message</h1>
                <div className='Vertical-field'>
                    <div className='Horizontal-field'>
                        <div className='Vertical-field' style={{paddingRight: 2}}>
                            <TextField 
                                color='secondary' 
                                variant='outlined' 
                                size='small' 
                                label='First Name' 
                                type='text' 
                                onChange={(event) => this.setState({firstName: event.target.value})}
                                inputProps={{autoComplete: 'new-password'}}/>
                        </div>
                        <div className='Vertical-field' style={{paddingLeft: 2}}>
                            <TextField 
                                color='secondary' 
                                variant='outlined' 
                                size='small' 
                                label='Last Name' 
                                type='text'
                                onChange={(event) => this.setState({lastName: event.target.value})} 
                                inputProps={{autoComplete: 'new-password'}}/>
                        </div>
                    </div>
                </div>
                <div className='Vertical-field'>
                    <TextField 
                        color='secondary' 
                        variant='outlined' 
                        size='small' 
                        label='Email' 
                        type='email'
                        onChange={(event) => this.setState({email: event.target.value})} 
                        inputProps={{autoComplete: 'new-password'}}/>
                </div>
                <div className='Vertical-field'>
                    <TextField 
                        color='secondary' 
                        variant='outlined' 
                        size='small'
                        onChange={(event) => this.setState({company: event.target.value})} 
                        label='Company'/>
                </div>
                <div className='Vertical-field'>
                    <TextField 
                        color='secondary' 
                        variant='outlined' 
                        size='small'
                        onChange={(event) => this.setState({message: event.target.value})} 
                        multiline={true} 
                        rows={5} 
                        label='Message'/>
                </div>
                <div className='Vertical-field'>
                    <Button 
                        className='Button'  
                        color='secondary' 
                        variant='outlined' 
                        onClick={() => this.sendMessage()}
                        style={{alignSelf: 'center'}}>Send</Button>
                </div>
            </div>
        )
    }
}

export default Messager;