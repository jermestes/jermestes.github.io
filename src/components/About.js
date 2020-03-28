import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';

const About = () => {
    return (
        <section id="about" className="react-transition swipe-up">
            <img className="sub-sec about-pic" src={Aboutpic} alt="Illustrated self-portrait of Jerm"/>
            <div className="sub-sec about-text">
                <h2>About Me</h2>
                <p>
                    My name is Jeremy, but most just call me Jerm. I'm a web developer and designer with an all-around
                    IT background. I've recently graduated from college and am now available for hire.&nbsp;
                    <a href="#work"><strong>See my work below.</strong></a>
                </p>      
            </div>        
        </section>
    );
};

export default About;