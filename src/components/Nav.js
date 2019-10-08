import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Work from './Work';


class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/"><img src="https://jermestes.com/images/logo.png" alt=""/></Link>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><a href="https://jermestes.com/images/logo.png" target="_BLANK">Resume</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Route path="/about" Component={About} />
                    <Route path="/work" Component={Work} /> 
                    <Route path="/contact" Component={Contact} />    
                </nav>                   
            </header>

        );
    }
}

export default Nav;