import React from 'react';
import './Feedback.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Feedback() {
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const token=localStorage.getItem("jwtToken");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8080/api/v1/users/addUserFeedback", {
          email,
          feedback,
        },{
            headers: {
              Authorization: "Bearer " + token
            }
          });
  
        console.log(response.data); // This will log "Feedback added!" if successful
        // Optionally, you can show a success message to the user
      } catch (error) {
        console.error(error);
        // Optionally, you can show an error message to the user
      }
    };
  
    return (
      <div className='aadi'>
        <center>
        <form onSubmit={handleSubmit}>
        <div>
            <input
              type="email"
              id="email"
              className='f'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="feedback"
              value={feedback} 
              className='f1'
              placeholder='Feedback'
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          
          <button type="submit" id='fs'>Submit</button>
        </form>
        <div className='feedbacks'>
      
        </div>
        </center>
      </div>
    );
  }
  
  export default Feedback;