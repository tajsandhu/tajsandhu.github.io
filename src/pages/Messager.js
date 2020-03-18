import React from 'react';
import { Button, TextField } from '@material-ui/core';
import * as emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/Messager.css';
import { MessageService, ReCaptcha } from '../res/config.js';

class Messager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: '',
            captchaResponse: '',
        }
    }

    //uses EmailJS to directly send me messages
    sendMessage = () => {
        let state = this.state;
        if (state.captchaResponse !== ''){
            if (state.firstName !== '' && state.lastName !== '' 
                && state.email !== '' && state.company !== '' && state.message !== ''){   
                //creates a template consistant with the custom template created with EmailJS
                let templateParams = {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.email,
                    company: this.state.company,
                    message: this.state.message,
                    'g-recaptcha-response': this.state.captchaResponse,
                };
                
                //Sends the message to one of my email address
                /* TODO: implement error handling */
                emailjs.send(
                    MessageService.type,
                    MessageService.template,
                    templateParams,
                    MessageService.user_id,
                ).then(
                    this.props.closingFunction()
                );
            } else {
                window.alert('Fill all fields');
            }
        } else {
            window.alert('Captcha needs to be completed')
        }
    }

    render() {
        return (
            <div className='Message-box'>
                <h1 className='Main-title'>Send Message</h1>
                <ReCAPTCHA
                    sitekey={ReCaptcha.site_key}
                    onChange={(res) => this.setState({captchaResponse: res})}
                    style={{alignSelf: 'center'}}
                />
                <div className='Vertical-field'>
                    <div className='Horizontal-field'>
                        <div className='Vertical-field' style={{paddingRight: 2}}>
                            <TextField 
                                color='secondary' 
                                variant='outlined' 
                                size='small' 
                                label='First Name' 
                                type='text' 
                                required
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
                                required
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
                        required
                        onChange={(event) => this.setState({email: event.target.value})} 
                        inputProps={{autoComplete: 'new-password'}}/>
                </div>
                <div className='Vertical-field'>
                    <TextField 
                        color='secondary' 
                        variant='outlined' 
                        size='small' 
                        required
                        onChange={(event) => this.setState({company: event.target.value})} 
                        label='Company'/>
                </div>
                <div className='Vertical-field'>
                    <TextField 
                        color='secondary' 
                        variant='outlined' 
                        size='small' 
                        required
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