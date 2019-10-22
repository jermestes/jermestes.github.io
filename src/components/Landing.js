import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../assets/hero.jpg';
import Hero_wide from '../assets/hero-wide.jpg';
import {Link} from 'react-router-dom';

const Header = styled.header`
    display: flex;
    flex-flow: column-reverse ;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        flex-flow: row wrap;
    }
    * {
        margin: 0;
    }
`;

const Waterfall = styled.div`
    text-transform: uppercase;
    text-align: center;
    z-index: 30;
    align-self: center;
    line-height: 3rem;
    
    h1 {
        background-color: ${props => props.theme.pink};
        display: inline-block;
        font-size: 2.5rem;
    }
    padding-top: 2rem;
    ${props => props.theme.h2};
    @media screen and (min-width: ${props => props.theme.nowTablet}) {
        display: block;
        grid-column: 1/7;
        padding-top: 2.5rem;
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        text-align: right;
        align-self: start;
        padding: 0 1rem 0 0;
        grid-column: 2/3;
        grid-row: 1/2;
    }
`;

const HeroPic = styled.picture`
    @media screen and (min-width: ${props => props.theme.nowTablet}) {
        height: 25rem;
        grid-column: 7/13;
        justify-self: start;
    }

    @media screen and (min-width: ${props => props.theme.nowTablet}) {
        padding-left: 1rem;
    }
    img {
        width: 100%;
        opacity: .5;
        @media screen and (min-width: ${props => props.theme.nowTablet}) {
            width: 22.5rem;
            opacity: 1;
        }
    }
`;

const ChevronBTN = styled.button`
    background-color: transparent;
    border: none;
    span {
        cursor: pointer;
        height: 50px;
        width: 50px;
        border: solid grey;
        border-width: 0 5px 5px 0;
        display: inline-block;
        transform: rotate(45deg);
        text-align: right;
        animation: bounce 600ms ease-in-out 600ms infinite alternate;
        ::after {
            height: 50px;
            width: 50px;
            margin: 10px;
            content: '';
            border: solid grey;
            border-width: 0 5px 5px 0;
            display: inline-block;
            text-align: right;
        }
    }
`;

class Landing extends Component {
    render() {
        return (
            <Header>
                <Waterfall id="header-art_textbox">
                    <h1 id="header-art_h1">Jerm Estes</h1>
                    <h2 id="header-art_textbox_waterfall">Web developer<br />Designer<br />Creator</h2>
                    <Link to="/about"><ChevronBTN><span></span></ChevronBTN></Link>
                </Waterfall>

                <HeroPic id="header-art_picture">
                    <source media="(min-width: 700px)" srcSet={Hero} />
                    <source media="(max-width: 700px)" srcSet={Hero_wide} />
                    <img src={Hero_wide} className="header-art_picture_img" alt="Jerm dribbling while coding" />
                </HeroPic>
            </Header>
        );
    }
}

export default Landing;