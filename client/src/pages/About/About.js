import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="img.jpg" alt="profile pic"/>

            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               Hello,I am Swati. I am 23 years old. I am from kanpur dehat Uttar Pradesh. Recently I have completed my Post Graduation from Hartcourt Butler Technical University Kanpur.
               I have completed my Graduation from D.B.S college kanpur Uttar Pradesh. I am a software developer. I have a good knowledge of HTML, CSS ,JavaScript, ReactJs,NodeJs,MongoDb.


              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
