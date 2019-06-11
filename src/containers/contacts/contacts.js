import React, { Component } from 'react'
import classes from './contacts.module.css';
import axios from 'axios'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          sent: false,
          error: false,
          sending: false
        }
    }
    
    resetForm() {
        document.getElementById('contact-form').reset()
    }

    handleFormSubmit( event ) {
        event.preventDefault();
        let data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            message: this.state.message
        }

        if(this.state.fname !== '' || this.state.lname !== '' || this.state.email !== '' || this.state.message !== '') {
            this.setState({
                sending: true
            })
        }

        if (this.state.fname === '' || this.state.lname === '' || this.state.email === '' || this.state.message === '' ) {
            this.setState({
                error: true
            })
        }

        setTimeout(() => {
            axios.post('https://gportfolioserver.herokuapp.com/api/v1', data)
            .then( res => {
                if (res.data === "Success") {
                    this.setState({ 
                        sent: true,
                        fname: '',
                        lname: '',
                        email: '',
                        message: '',
                        sending: false
                    });
                    this.resetForm()
                } 
            })
            .catch( (err) => {
                console.log(err)
            })
        }, 1000);
    }


    render() {

        
        const spinnerStyle = {
            display: 'none'
        }

        const submitStyle = {
            display: 'block'
        }

        const successAlertStyle ={
            position: 'relative',
            top: '-560px',
            display: 'none'
        }

        const dangerAlertStyle ={
            position: 'relative',
            top: '-580px',
            display: 'none'
        }

        if (this.state.sending === true) {
            spinnerStyle.display = 'block'
            submitStyle.display = 'none'
        } else {
            spinnerStyle.display = 'none'
            submitStyle.display = 'block'
        }

        if(this.state.sent === true) {
            successAlertStyle.display = 'block'
        }

        if(this.state.error === true) {
            dangerAlertStyle.display = 'block'
        }

        return (
            <div id="contact" className={classes.ContactPage}>
                <div className={classes.ContactDiv}> 
                    <h1 style={{color:'white', textAlign: 'center'}}><u>CONTACT</u></h1>
                        <div className={classes.Form}>
                            <form id="contact-form" >
                                <label>First Name</label>
                                <input type="text"id="fname"name="firstname"placeholder="Your first name..."
                                    value={this.state.fname}
                                    onChange={e => this.setState({ fname: e.target.value })}/>
        
                                <label>Last Name</label>
                                <input type="text"id="lname" name="lastname" placeholder="Your last name..."
                                    value={this.state.lname}
                                    onChange={e => this.setState({ lname: e.target.value })}/>
        
                                <label>Email</label>
                                <input type="email"id="email"name="email"placeholder="Your email..."
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}/>
                                
                                <label>Message</label>
                                <textarea id="subject"name="subject"placeholder="Write something..." 
                                    onChange={e => this.setState({ message: e.target.value })}
                                    value={this.state.message}>    
                                </textarea>
                                <button style={{backgroundColor:'green', color: 'white', position: 'relative', left: '50%', transform: 'translate(-50%)'}} onClick={e => this.handleFormSubmit(e)} className="btn" type="button" >
                                    <span style={submitStyle}>Submit</span>
                                    <span style={spinnerStyle} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                                <div style={successAlertStyle} className='alert alert-success'>Message was sent!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button></div>
                                <div style={dangerAlertStyle} className='alert alert-danger'>Message was not sent or you didn't enter enough information.
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button></div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default Contacts