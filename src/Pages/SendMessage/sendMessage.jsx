import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios"

function SendMessage() {

    const [otp,setOTP] = useState('')
    const [contact,setContact] = useState([])

    const {id} = useParams()
    console.log(id);

    // generate OTP
    const generateOTP = () => {
        const newOTP = Math.floor(100000 + Math.random() * 900000);
        setOTP(newOTP);
    };

    console.log(otp);

    // Send Message
    const handleSend = async () => {
        const data = {
            id:id,
            firstName : contact.firstName,
            lastName : contact.lastName,
            phone : contact.phone,
            otp:otp
        }
        console.log(data);
        try {
            const response = await axios.post(`https://datataskers-backend.onrender.com/sendMessage`,data)
            console.log(response);   
        } catch (error) {
            console.error("Failed to send the message");
        }
    }

    useEffect(() => {
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

    useEffect(() => {
      generateOTP()
    }, [])
    

  return (
    <>
        <div className='row d-flex align-items-center justify-content-center mt-5 mb-5' style={{ height: "70vh" }}>
            <div className='col-10 col-lg-4'>
                <div className='card'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 col-lg-10'>
                            <h3 className='mt-5 ms-5 mb-3'>Message to {contact.firstName} :</h3>
                            
                            {/* message */}
                            <div className='ms-5 mt-3'>
                                <textarea class="form-control" value={`Hello ${contact.firstName} ${contact.lastName}. Your OTP is ${otp}`} id="floatingTextarea2" style={{height: "100px", width:"auto"}}></textarea>
                            </div>

                            {/* Message send and otp buttons */}
                            <div className='ms-5 mt-3 mb-5 d-flex'>
                                <button className='btn btn-danger' onClick={handleSend}>Send <i className="ms-3 fa-regular fa-paper-plane"></i></button>
                                <button className='btn btn-success ms-3' onClick={generateOTP}>Regenerate OTP <i className="ms-3 fa-solid fa-repeat"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default SendMessage