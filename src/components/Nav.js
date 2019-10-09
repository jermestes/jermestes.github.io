import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Logo from '../assets/logo.png';
import HamburgerBTN from './HamburgerBTN';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Pdf from '../assets/jeremyestes_resume.pdf';
import styled from 'styled-components';

const screenBreakpoint1 = '900px';

//The full nav, containing a <ul> list of <li> links
const Navbar = styled.nav`
    text-transform: uppercase;
    display: grid;
    grid-template-rows: 3.75rem 3.75rem;  
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #EEEEEE;
    padding: 0 1rem;
    @media screen and (min-width: ${screenBreakpoint1}) {
        grid-template-columns: repeat(12,1fr);
        padding: none;
    }
    ul {
        display: none;
        text-transform: uppercase;
        list-style: none;
        li a, li a:visited {
            font-weight: bolder;  
            color: #747272;
            font-family: 'Chakra Petch', sans-serif; 
            text-decoration: none; 
        }
        @media screen and (min-width: ${screenBreakpoint1}){
            grid-column: 4/12;
            grid-row: 1/2;
            display: grid;
            justify-items: start;
            align-items: end;
            margin: 0;
            padding: 0;
            z-index: 20;
            grid-template-columns: 2fr 2fr 2fr 2fr;
            grid-template-rows: auto;
        }
    }
`;

//the top & bottom halves of the nav background
//used to allow logo to have a color-split effect
const Tophalf = styled.div`
    grid-column: 1/13;
    grid-row: 1/2;
    z-index: 10;
`;


const Bottomhalf = styled.div`
    grid-column: 1/13;
    grid-row: 2/3;
    z-index: 10;
    @media screen and (min-width: ${screenBreakpoint1}) {
        background-color: white;
    }
`;

//The nav logo/home button, an <img> contained in an <a>
const Navlogo = styled(NavLink)`
    justify-self: center;
    align-self: center;
    z-index: 20;
    height: 6.25rem;
    grid-column: 2/3;
    grid-row: 1/3;
    img {
        height: 6.25rem;
        &:hover {
            opacity: 0.9;
        }
    }
    @media screen and (min-width: ${screenBreakpoint1}) {
        grid-column: 1/4;
        grid-row: 1/3;
    }
`;

class Nav extends Component {
    render() {
        return (
            <header>
                <Navbar>
                    <Navlogo to="/"><img src={Logo} alt="Site Logo"/></Navlogo>
                    <HamburgerBTN />
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/work">Work</NavLink></li>
                        <li><a href={Pdf} target="_BLANK">Resume</a></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <Tophalf/>
                    <Bottomhalf/>
                </Navbar>       
                
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} /> 
                    <Route path="/contact" component={Contact} />   
                    <Route exact path="/" component={Landing} />
                </Switch>            
            </header>

        );
    }
}

export default Nav;