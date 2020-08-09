import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {

    const { status } = this.state;
    return (
      <div id="contact">
      <div className="md:flex md:flex-row md:justify-between pt-24 pb-24 bg-indigo-300">
        <h1 className="pl-10 text-gray-700 text-xl font-bold flex items-center">~ Zainsattar18@gmail.com ~  </h1>
        <form className='w-full max-w-lg md:mr-8 p-3 mt-2'
          onSubmit={this.submitForm}
          action="https://formspree.io/moqkyyzl"
          method="POST">
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Name:</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="Name" placeholder="Name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="exampleInputEmail1">Email:</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" name="email" aria-describedby="emailHelp" placeholder="Email" />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message:</label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" rows="10" name="message" placeholder="Message"></textarea>
            </div>
          </div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex justify-center">Submit</button>
          </div>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
      </div>
      
    );
  }

}