import React, { Component } from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <img src={Aboutpic} className="about-pic" alt="Illustrated self-portrait of Jerm"/>
                <div id="intro" className="main_sub-secs">
                    <h2>Intro</h2>
                    <p>
                        My name is Jeremy, but most just call me Jerm. I'm a web developer/designer with an all-around
                        IT background. I've recently graduated from college and am now available for hire.
                    </p>
                    <div id="intro-btns_container">
                        <button className="btn intro-btn">SEE MY WORK</button>
                        <button className="btn intro-btn">VIEW MY RESUME</button>
                        <button className="btn intro-btn">CONTACT ME</button> 
                    </div>                
                </div>
            </div>
        );
    }
}

export default About;