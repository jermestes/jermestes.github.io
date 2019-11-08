import React, { Component } from 'react';
import Pdf from '../assets/jeremyestes_resume.pdf';
import LogoPic from '../assets/logo.png';

class Nav extends Component {
    mobileAction = () => {
        //identify the the hamburger btn & link list
        const btn = document.querySelector('.hamburger');
        const Menu = document.querySelector('.nav-links');
        //toggle their active class
        Menu.classList.toggle('open');
        btn.classList.toggle('x');      
    }

    render() {
        return (
            <nav>
                <img className="nav-logo" src={LogoPic} alt="Site Logo"/>

                <button className="hamburger" onClick={this.mobileAction}>
                    <div></div>  
                    <div></div>  
                    <div></div>                
                </button>

                <ul className="nav-links">
                    <li><a href="#about" className="nav-link aboutLink">About</a></li>
                    <li><a href="#work" className="nav-link workLink">Work</a></li>
                    <li><a href={Pdf} className="nav-link resumeLink" target="_BLANK" rel="noopener noreferrer" >Resume</a></li>
                    <li><a href="#contact" className="nav-link contactLink">Contact</a></li>
                </ul>
                
                <div className="nav-background nav-tophalf" />
                <div className="nav-background nav-bottomhalf" />
            </nav>      
        );
    }
}

export default Nav;