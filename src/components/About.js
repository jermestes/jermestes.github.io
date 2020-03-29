import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';

const About = () => {
    return (
        <section id="about" className="react-transition swipe-up">
            <div className="about-wrapper">
                <img className="sub-sec about-pic" src={Aboutpic} alt="Illustrated self-portrait of Jerm"/>
                <div className="sub-sec about-text">
                    <h2>About Me</h2>
                    <p>
                        My name is Jeremy, but most just call me Jerm.
                        I'm a web developer from Philadelphia, with an all-around IT background.
                    </p>
                </div> 
            </div>
        </section>
    );
};

export default About;