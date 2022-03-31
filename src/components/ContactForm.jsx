import React, { useState } from "react";

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

  return (
    <>
            <form  className="form mt-4 row">

            <div className="form-group col-md-6">
            <input required
            type="text"
            name="Name"
            className="Name form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            tabIndex="1"
             placeholder="Name"/>
            </div>
            <div className="form-group col-md-6">
            <input required
            type="text"
            name="Phone"
            className="Phone form-control"
            tabIndex="3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"/>
            </div>
            <div className="form-group col-md-12">
            <input required
            name="email"
            id="email"
            className="email form-control"
            tabIndex="2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"/>
            </div>
            <div className="form-group col-md-12">
            <textarea 
            className="message form-control"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             placeholder="Enter your question"/>
            <div className="mt-5">
           <button type="submit" className="send btn w-100">Submit</button>
           </div>
            </div>
            
            </form>
    </>
  )
}

export default ContactForm;