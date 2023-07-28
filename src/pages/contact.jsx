import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './contact.css'


const ContactPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setUsername('');
        setEmail('');
        setMessage('');
    };

    // Handler for capturing user input
  
    const logStyle = {
        height: '100%',


    }

    return (

        <section className="contact" id="contact">
            <Link to="/DOCMED"><a class="logo"><i class="fa-solid fa-user-doctor"></i> DOCMED</a></Link>
            <h1>Connect With Us</h1>
            <h2>We would love to respond to your queries and help you overcome your problem.</h2>
            <h2>Feel free to get in touch with us.</h2>

            <div className="row">
                <div className="form">
                    <h3 className="sub-heading">Send your message</h3>
                    <div className="input-form">

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" ></label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='username'
                            />
                            

                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='email'
                            />
                            <br />
                            <label htmlFor="message"></label>
                            <input
                                type="text"
                                id="message"
                                value={message}
                                onChange={handleInputChange}
                                placeholder="Type your message here..."
                            />
                            <br /><br />

                            <button type="submit" className='btn'>Send</button>
                        </form>
                    </div>

                </div>
                <div className="content">
                    <h3>Reach Us</h3>
                    <br /><br />
                    <h2>Email : docmed123@gmail.com</h2>
                    <br /><br />
                    <h2>Phone : 8471396412</h2>
                    <br /><br />
                    <h2>Address: QQ5R+3WM, NIT Road, Fakiratilla, Silchar, Assam 788010</h2>
                </div>
                

            </div>
        </section>
    );
};

export default ContactPage;
