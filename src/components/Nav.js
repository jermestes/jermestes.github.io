import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                <Link to="/" className="nav-logo"><img className="nav-logo" src={LogoPic} alt="Site Logo"/></Link>

                <button className="hamburger" onClick={this.mobileAction}>
                    <div></div>  
                    <div></div>  
                    <div></div>                
                </button>

                <ul className="nav-links">
                    <li><Link to="/about" className="nav-link aboutLink">About</Link></li>
                    <li><Link to="/work" className="nav-link workLink">Work</Link></li>
                    <li><a href={Pdf} className="nav-link resumeLink" target="_BLANK" rel="noopener noreferrer" >Resume</a></li>
                    <li><Link to="/contact" className="nav-link contactLink">Contact</Link></li>
                </ul>
                
                <div className="nav-background nav-tophalf" />
                <div className="nav-background nav-bottomhalf" />
            </nav>      
        );
    }
}

export default Nav;