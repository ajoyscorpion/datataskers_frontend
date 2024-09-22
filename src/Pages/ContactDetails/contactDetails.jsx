import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link,useParams} from "react-router-dom";
//import contacts from '/Users/ajoy/Assignments/Data Taskers/frontend/src/data/contact.json'
import axios from "axios"
import profile from '/Users/ajoy/Assignments/Data Taskers/frontend/src/Images/profile.png'

function ContactDetails() {

  const [contact,setContact] = useState([])

  const {id} = useParams()

  useEffect(() => {

    // Get the mentioned contact
    const fetchContact = async () => {
      try {
        const response = await axios.get(`https://datataskers-backend.onrender.com/contact/${id}`)
        setContact(response.data)
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }
  
    fetchContact()
  }, [id])

  return (
    <>
      <div className='row d-flex align-items-center justify-content-center mt-5 mb-5' style={{height:'70vh'}}>
        <div className='col-10 col-lg-6'>
          <div className='card'>
            {contact ? (
              <div key={contact.id}>
                <div className='d-flex align-items-center justify-content-around'>

                  <div className='m-5'>
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <p className='mt-3'>{contact.phone}</p>
                    <p>ajoyscorpion@gmail.com</p>
                    <p>India</p>
                  </div>

                  {/* image */}
                  <div className='d-none d-lg-block'>
                    <img src={profile} alt="profile" style={{width:"200px"}} />
                  </div>
                </div>

                {/* Navigate to send message section */}
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-outline-secondary mb-5'>
                    <Link to={`/sendMessage/${contact.id}`} style={{textDecoration:'none',color:'black'}}>Send Message <i className="fa-regular fa-message ms-3"></i></Link>
                  </button>
                </div>  
              </div>   
              ):(
                <div>
                  <p className='text-center mt-3' style={{fontWeight:"bold"}}>Contact Not Found</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactDetails