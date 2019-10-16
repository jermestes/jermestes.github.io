import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/logo.png';
import HamburgerBTN from './HamburgerBTN';
import Pdf from '../assets/jeremyestes_resume.pdf';
import styled from 'styled-components';

const screenBreakpoint1 = '900px';

//The full nav, containing a <ul> list of <li> links
const Navbar = styled.nav`
    text-transform: uppercase;
    display: grid;
    grid-template-rows: 3.75rem 3.75rem;  
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${props => props.theme.lightgrey};
    padding: 0 1rem;
    @media screen and (min-width: ${screenBreakpoint1}) {
        grid-template-columns: repeat(12,1fr);
        padding: 0;
    }
    ul {
        display: none;
        text-transform: uppercase;
        list-style: none;
        li a, li a:visited {
            font-weight: bolder;  
            color: ${props => props.theme.darkgrey};
            font-family: ${props => props.theme.primaryfont}, sans-serif; 
            text-decoration: none; 
        }
        li a:hover {
            border-bottom: 5px solid red;
        }
        @media screen and (min-width: ${props => props.theme.nowDesktop}){
            grid-column: 4/12;
            grid-row: 1/2;
            display: grid;
            justify-items: start;
            align-items: end;
            margin: 0;
            padding-bottom: 10px;
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
            <Navbar>
                <Navlogo to="/"><img src={Logo} alt="Site Logo"/></Navlogo>
                <HamburgerBTN />
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/work" activeClassName="activeLink">Work</NavLink></li>
                    <li><a href={Pdf} target="_BLANK" rel="noopener noreferrer">Resume</a></li>
                    <li><NavLink to="/contact" activeClassName="activeLink">Contact</NavLink></li>
                </ul>
                <Tophalf/>
                <Bottomhalf/>
            </Navbar>      
        );
    }
}

export default Nav;