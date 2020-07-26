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
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" placeholder="name" name="name" value={name} onChange={this.handleChange} />
//           <br />
//           <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
//           <br />
//           <textarea name="message" placeholder="Type Message Here!" value={message} onChange={this.handleChange} cols="30" rows="10"></textarea>
//           <button>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      // url: " https://zain-portfolio.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      
      <div id="contact">
        <div className="md:flex md:flex-row md:justify-between pt-24 pb-24 bg-indigo-300">
        <h1 className="pl-10 text-gray-700 text-xl font-bold flex items-center">~ Zainsattar18@gmail.com ~  </h1>
        <form className='w-full max-w-lg md:mr-8 p-3 mt-2' id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Name:</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="name" placeholder="Name"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exampleInputEmail1">Email:</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" id="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message:</label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" rows="10" id="message" placeholder="Message"></textarea>
            </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex justify-center">Submit</button>
              </div>
          </form>
          </div>
      </div>
    )
  }
}

export default ContactForm; 
