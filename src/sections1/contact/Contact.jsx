import styles from './ContactStyles.module.css';
import React, { useEffect } from 'react';

function Contact() {
 useEffect(() => {
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            let formData = new FormData(this);

            fetch('http://localhost:5173/send_email', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    }, []);

  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form id="contactForm" action="http://localhost:5173/send_email"  method="POST">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                type='text'
                name="name" 
                id="name"
                placeholder='Name'
                required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                type='email'
                name="email" 
                id="email"
                placeholder='Email'
                required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                name="message" 
                id="message"
                placeholder='Message'
                required/>
            </div>
            <input className="hover btn" type='submit' value='Submit'/>
        </form>
    </section>
  )
}

export default Contact