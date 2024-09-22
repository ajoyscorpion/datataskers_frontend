import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

function AllMessages() {

    const [messages,setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://datataskers-backend.onrender.com/allMessages")
                setMessages(response.data)
                console.log(response.data);
            } catch (error) {
                console.error(error);  
            }
        }

        fetchData()
    }, [])

    // Format date and time
    const formatDateTime = (timestamp) => {
        const dateObj = new Date(timestamp);
        const date = dateObj.toLocaleDateString('en-GB');
        const time = dateObj.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
        });

        return { date, time };
    };

    // Sorting messages in descending order
    const sortedMessages = [...messages].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    

  return (
    <>
        <h1 className='text-center mt-5'>
          Sent Messages
        </h1>

        <div className='row d-flex justify-content-center mt-5 mb-5'>
          <div className='col-12 col-lg-6 row'>
            {sortedMessages.map((item,index) => {
                const { date, time } = formatDateTime(item.timestamp);
                return (
                        <div key={index} className="col-11 col-lg-5 card m-3 ">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h4>{item.contact}</h4>
                                <div className='mt-3'>
                                    <p style={{ marginBottom: '2px', fontSize:"12px" }}>{date}</p>
                                    <p style={{fontSize:"12px"}}>{time}</p>
                                </div>    
                            </div>
                            <p style={{fontWeight:"500"}}>Hello {item.contact}, Your OTP is {item.otp}</p>
                        </div>
                    );
                })
            }
          </div>
        </div>
       
    </>
  )
}

export default AllMessages