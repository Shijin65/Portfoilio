
import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactCard from './ContactCard';

const Contact = () => {
  const iconSize = 30;

  //ready - pending - sent
  const [messageStatus, setMessageStatus] = useState('ready')
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactList = [
    {
      iconSvg : (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>),
    href:"mailto:shijincht65@gmail.com",
      contactMethod:'Email',
      contactAddr:'shijincht65@gmail.com'
    },
    {
      iconSvg : (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-voicemail" viewBox="0 0 16 16">
      <path d="M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>
    </svg>),
    href:"tel:8848217507",
      contactMethod:'Phone',
      contactAddr:'8848217507'
    }
  ]
  

  const sendEmail = (e) => {
    e.preventDefault();
    const cfm = window.confirm('Do you want to send the message?')
    if(!cfm)  return setFormData({
      name: '',
      email: '',
      message: '',
    });
    //send the message
    setMessageStatus('pending')
    emailjs
      .sendForm('service_m2fuaz5', 'template_cbk1w9k', form.current, {
        publicKey: 'h1-Vq5dd0YjBV-JFc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
            //message sent successfully
            setMessageStatus('sent')
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setTimeout(()=>{
            setMessageStatus('ready')
          }, 3000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact section flex flex-col items-center" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className='flex justify-center gap-20 flex-wrap contactContainer'>
    <div className=' flex flex-col md:flex-row gap-2 items-center'>

        {
          contactList.map((contactItem)=>(
            <ContactCard key={contactItem.contactAddr} contactItem={contactItem}/>
          ))
        }
        </div>
        
      </div>
      
    </section>
  )
}

export default Contact