import React from "react";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";

const About = () => {
const [isFlipped, setIsFlipped] = useState(false);
const handleClick = ()=>{
  setIsFlipped(!isFlipped);
};



  return (
    <div>
        <div className="about_section">
            <h3 class="nsTitle">ABOUT US</h3>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="cardfront">
              An organisation advancing social justice in communities and among university students. 
                <button onClick={handleClick}>Click to flip</button>
              </div>
              <div className="cardback">
              With the iREPORTER web application registered users are given a platform to expose any kind of information or activity that is deemed  illegal, unethical or not correct in the eyes of society.
                <button onClick={handleClick}>Click to flip</button>
              </div>
            </ReactCardFlip>
            
            </div>



    </div>
   
  );

};

export default About;