import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';

const About = () => {
    return (
        <section id="about">
            <img className="sub-sec about-pic" src={Aboutpic} alt="Illustrated self-portrait of Jerm"/>
            <div className="sub-sec about-text">
                <h2>Intro</h2>
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