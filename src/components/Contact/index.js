import React, {useState} from 'react'
function ContactForm() {
    // below is super important code for your future dev
    const [formState, setFormState] = useState({name: '', email:'', message:''});
    const {name, email, message} = formState;
     function handleChange(e) {
         setFormState({...formState, [e.target.name]: e.target.value})
     }
  //console.log(formState);
    //JSX
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                // name input
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name"/>
                    </div>
                    // email
                    <div>
                   <label htmlFor="email">Email:</label>
                   <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
                    </div>
                    // message text area
                    <div>
                   <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>                   
                     </div>
                <button type="submit">Submit</button>
                </form>
            </section>
             );
          };

export default ContactForm;