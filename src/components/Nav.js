import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/logo.png';
import HamburgerBTN from './HamburgerBTN';
import Pdf from '../assets/jeremyestes_resume.pdf';
import styled from 'styled-components';

//The full nav, containing a <ul> list of <li> links
const Navbar = styled.nav`
    text-transform: uppercase;
    display: grid;
    grid-template-rows: 2.65rem 2.65rem;  
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${props => props.theme.lightgrey};
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        grid-template-rows: 3.75rem 3.75rem;  
        grid-template-columns: repeat(12,1fr);
        padding: 0;
    }
    .x {
        div {
            &:first-child {
                transform: rotate(-45deg);
            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:last-child {
                width: 3rem;
                transform: rotate(45deg);
                margin: .55rem 0 0 0;
            }
        }
    }

    /*the top & bottom halves of the nav background, used to allow logo to have a color-split effect*/
    #nav-tophalf {
        grid-column: 1/13;
        grid-row: 1/2;
        z-index: 10;
    }
    #nav-bottomhalf {
        grid-column: 1/13;
        grid-row: 2/3;
        z-index: 10;
        @media screen and (min-width: ${props => props.theme.nowDesktop}) {
            background-color: white;
        }
    }

    /*the list of links in the nav bar*/
    ul {
        width: 50vw;
        height: 100vh;
        background-color: ${props => props.theme.lightgrey};
        text-align: center;
        line-height: 3rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        transition: right 500ms ease-in-out;
        position: fixed;
        right: -100vw;
        width: 50vw;
        text-transform: uppercase;
        list-style: none;
        .activeLink {
            border-bottom: 5px solid ${props => props.theme.blue};
        }
        #aboutLink {
            border-color: ${props => props.theme.pink};
        }
        #workLink {
            border-color: ${props => props.theme.blue};
        }
        #resumeLink {
            border-color: ${props => props.theme.gold};            
        }
        #contactLink {
            border-color: ${props => props.theme.green};
        }
        li a, li a:visited {
            font-weight: bolder;  
            color: ${props => props.theme.darkgrey};
            font-family: ${props => props.theme.primaryfont}, sans-serif; 
            text-decoration: none; 
        }
        li a:hover {
            border-bottom: 5px solid ${props => props.theme.blue};
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
            width: inherit;
            position: static;
            height: auto;
            width: inherit;
            line-height: inherit;
        }
    }

    ul.open {
        position: fixed;
        z-index: 30;
        right: 0;
        @media screen and (min-width: ${props => props.theme.nowDesktop}){
            grid-column: 4/12;
            grid-row: 1/2;
            display: grid;
            justify-items: start;
            align-items: end;
            margin: 0;
            padding-bottom: 10px;
            z-index: 30;
            grid-template-columns: 2fr 2fr 2fr 2fr;
            grid-template-rows: auto;
            width: inherit;
            height: inherit;
            position: static;
        }
    }
`;

//The nav logo/home button, an <img> contained in an <a>
const Navlogo = styled(NavLink)`
    justify-self: center;
    align-self: center;
    z-index: 20;
    grid-column: 2/3;
    grid-row: 1/3;
    img {
        height: 4.75rem;
        &:hover {
            opacity: 0.9;
        }
        @media screen and (min-width: ${props => props.theme.nowDesktop}) {
            height: 6.25rem;
        }        
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
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
                <ul id="burger">
                    <li><NavLink to="/about" activeClassName="activeLink" id="aboutLink">About</NavLink></li>
                    <li><NavLink to="/work" activeClassName="activeLink" id="workLink">Work</NavLink></li>
                    <li><a href={Pdf} target="_BLANK" rel="noopener noreferrer" id="resumeLink">Resume</a></li>
                    <li><NavLink to="/contact" activeClassName="activeLink" id="contactLink">Contact</NavLink></li>
                </ul>
                <div id="nav-tophalf" className="nav-background"/>
                <div id="nav-bottomhalf" className="nav-background"/>
            </Navbar>      
        );
    }
}

export default Nav;