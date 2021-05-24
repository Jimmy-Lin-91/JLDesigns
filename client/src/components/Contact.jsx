import React from 'react';
import Axios from 'axios';
import SendingGif from './SendingGif.jsx';
class Contact extends React.Component {
  constructor(){
    super(),
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sending: false,
      emailSend: false,
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleEmail(e) {
    e.preventDefault();
    this.setState({
      sending: true
    });
    Axios.post('https://linsanity.herokuapp.com/email', this.state)
    .then(res => {
      if (res.data.success) {
        this.setState({
          emailSend: true,
          disabled: true,
          sending: false
        })
      }
    })
    .catch(err => {
      this.setState({
        emailSend: false,
        disabled: false
      })
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    if (this.state.emailSend === false) {
      return (
        <div className='contact_container' id='contact'>
          <h1>Contact</h1>
          <div className='contact_form_container'>
            <form onSubmit={this.handleEmail}>
              <label>Full Name</label>
              <input className='input_group1' onChange={this.handleChange}name='name' ></input>
              <label>Email</label>
              <input className='input_group1' onChange={this.handleChange} name='email' ></input>
              <label>Subject</label>
              <input className='input_group1' onChange={this.handleChange} name='subject' ></input>
              <label>Message</label>
              <textarea className='input_group2' onChange={this.handleChange} name='message' placeholder='Message'></textarea>
              <input className='submit_button' type='submit' value='Submit'></input>
            </form>
          </div>
            {this.state.sending ? <SendingGif/> : null}
        </div>
      )
    } else {
      return (
        <h1 className='mail_sent_message'>His greatness will respond shortly!</h1>
      )
    }

  }
}
export default Contact;