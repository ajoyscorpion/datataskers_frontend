import React, { useEffect } from 'react'
//import contacts from '/Users/ajoy/Assignments/Data Taskers/frontend/src/data/contact.json'
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from 'react';

function ContactList() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    // Fetch all contact list
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://datataskers-backend.onrender.com/allContacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    
    fetchContacts(); 
  }, [])
  

  return (
    <>
        <h1 className='text-center mt-5'>
          Contact List
        </h1>

        <div className='row d-flex justify-content-center mt-5 mb-5'>
          <div className='col-12 col-lg-6 row'>
              {contacts.map(contact => (
                <div key={contact.id} className="col-11 col-lg-5 card m-3 ">
                  <div className='d-flex justify-content-between align-items-center'>

                    <p className='mt-3' style={{fontWeight:'bold'}}>{contact.firstName} {contact.lastName}</p>
                    
                    {/* Navigate to profile section */}
                    <button className='btn'>
                        <Link to={`/Contact/${contact.id}`} style={{textDecoration:'none',color:'black'}}><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
    </>
  )
}

export default ContactList