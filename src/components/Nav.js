import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
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
                <NavLink to="/" className="nav-logo"><img className="nav-logo" src={LogoPic} alt="Site Logo"/></NavLink>

                <button className="hamburger" onClick={this.mobileAction}>
                    <div></div>  
                    <div></div>  
                    <div></div>                
                </button>

                <ul className="nav-links">
                    <li><NavLink to="/about" activeClassName="active" className="nav-link aboutLink">About</NavLink></li>
                    <li><NavLink to="/work" activeClassName="active" className="nav-link workLink">Projects</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active" className="nav-link workLink">Resume</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active" className="nav-link contactLink">Contact</NavLink></li>
                </ul>
                
                <div className="nav-background nav-tophalf" />
                <div className="nav-background nav-bottomhalf" />
            </nav>      
        );
    }
}

export default Nav;