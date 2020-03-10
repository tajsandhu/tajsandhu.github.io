import React from 'react';
import { Button, TextField } from '@material-ui/core';

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

    sendMessage = () => {
        console.log(this.state)
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