import React from "react";
import profilepic from '../portfolio/images/linkedinprofpic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Home() {
  return (

    <div className="container content rounded">

      <div className="row">

        <div className="col-md-12">
        
        <h2 className="center">About Me</h2>

        <p></p>

        <img className="col-md-3 float-left" src={profilepic} alt="A picture of Dan" height="250" width="150"></img>
        
        <p>I am a dilgent, hard-working, emotionally-intelligent technology professional.  Currently I am a student in the University of Washington's Full-Stack Developer Coding Bootcamp.  My time in the military formed who I am as a professional and I draw on that experience every day make myself better professionally. It also has made me a team player.</p>

        <p>The portfolio section of this site contains the various projects that I have worked on so far.</p>
        </div>
        </div>
      </div>
    
  );
}

export default Home;