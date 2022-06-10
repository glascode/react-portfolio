import React from 'react'
import '../App.css';


const Github = () => {
  return (

    <div>
      
      <h1>Github projects</h1> 
    <ul id="github">
      <li>
      <a href="https://github.com/glascode/gensparkRepo/tree/main/Form_validation_and_transfer_week_10_assignment_2">
      Form validation and sending/recieving data
     </a>
     <p>This is a small prject demonstrating validating different types of data in forms and sending that data to a different website</p>
      </li>


      <li> 
        <a href="https://github.com/glascode/gensparkRepo/tree/main/Week_8_Assignment">Spring dependency injections</a>
        <p>This project demonstrates setter, constructor, and annotation based dependency injections using the Spring framework</p>
      </li>
      <li> 
        <a href="https://github.com/glascode/gensparkRepo/tree/main/Week_9_Assignment">Spring Boot MVC</a>
        <p>This project demonstrates two different web applications using Spring Boot MVC arcitectures, incorperating dependency injections from the previous
          project, as well as communicating with a SQL database. 
        </p>
      </li>
     
    </ul>
    

    
    
    
   
    
    </div>
   

  )
}

export default Github