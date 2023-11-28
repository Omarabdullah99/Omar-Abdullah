/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { FaPhoneVolume,  } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qhl90g4', 'template_ztllocn', form.current, 'QboxwCZie8lBVPZ0Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    const contacts=[
        {
            logo:<FaPhoneVolume />,
            value:'01624108866'
        },
        {
            logo:<SiGmail/>,
            value:'omarabdullah917303@gmail.com'
        },
        {
            logo:<CiLocationOn />,
            value:'Dhaka, Bangladesh'
        },

    ]
  return (
    <div className='my-10'>

    <div className="left text-center">
    <h1 className='text-xl md:text-4xl font-bold mb-3 md:mb-10'>Lets discuss your porjects</h1>
    {
        contacts.map((contact)=>(
            <div key={contact} className='flex items-center justify-center gap-3 text-sm md:text-xl my-2 md:my-10'>
            <p>{contact.logo} </p>
            <p>{contact.value}</p>
            </div>
        ))
    }
    </div>

  {/* <div className="right w-[40%]">
        <p><span className='font-bold'>What’s your story? </span>Get in touch. Always available for
        freelancing if the  right project comes along. me.</p>

        <form ref={form} onSubmit={sendEmail}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button className='button'>Submit</button>
          </form>
</div> */}
    
    </div>
  )
}

export default Contact