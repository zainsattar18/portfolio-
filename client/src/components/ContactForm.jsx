// import axios from 'axios'
// import React, { Component } from 'react'

// export default class ContactForm extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     // const { name, email, message } = this.state 
//     axios.post('/send', {
//       name: this.state.name,
//       email: this.state.email,
//       message: this.state.message
//     }).then((response) => {
//       if (response.data.msg === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.data.msg === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   render() {
//     const { name, email, message } = this.state
//     return (
//       <div>
//         <form onClick={() => this.handleSubmit()}>
//           <input type="text" placeholder="name" name="name" value={name} onChange={this.handleChange} />
//           <br />
//           <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
//           <br />
//           <textarea name="message" placeholder="Type Message Here!" value={message} onChange={this.handleChange} cols="30" rows="10"></textarea>
//         </form>
//         <button>Submit</button>
//       </div>
//     )
//   }
//}

import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className='' id="contact">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className=''>
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className=''>
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 
