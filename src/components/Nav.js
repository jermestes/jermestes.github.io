import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import LogoPic from '../assets/logo.png';
import Pdf from '../assets/jeremyestes-resume.pdf';

class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/" className="nav-logo" onClick={this.props.action}><img className="nav-logo" src={LogoPic} alt="Site Logo"/></NavLink>

                <ul className="nav-links">
                    <li><NavLink to="/about" onClick={this.props.action} activeClassName="active" className="nav-link aboutLink">About</NavLink></li>
                    <li><NavLink to="/work" onClick={this.props.action} activeClassName="active" className="nav-link workLink">Projects</NavLink></li>
                    <li><a href={Pdf} className="nav-link" target="_BLANK" rel="noopener noreferrer">Resume</a></li>
                </ul>
                
                <div className="nav-background nav-tophalf" />
                <div className="nav-background nav-bottomhalf" />
            </nav>      
        );
    }
}

export default Nav;