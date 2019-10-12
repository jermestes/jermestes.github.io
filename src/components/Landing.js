import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../assets/hero.jpg';
import Hero_wide from '../assets/hero-wide.jpg';

const Waterfall = styled.div`
    font-family: ${props => props.theme.primaryfont}; 
    text-transform: uppercase;
    text-align: center;
    z-index: 30;
    position: relative;
    align-self: center;
    h1 {
        background-color: ${props => props.theme.pink};
        display: inline-block;
        font-size: 2.5rem;
    }
    ${props => props.theme.h2};
    @media screen and (min-width: 700px) {
        display: block;
        grid-column: 1/7;
        justify-self: end;
        line-height: 3rem;
        padding-right: 1rem;
        text-align: right;
        align-self: start;
    }
`;

const HeroPic = styled.picture`
    @media screen and (min-width: 700px) {
        position: static;
        height: 25rem;
        grid-column: 7/13;
        padding-left: 1rem;
        justify-self: start;
    }
    img {
        width: 100%;
        opacity: .5;
        @media screen and (min-width: 700px) {
            width: 22.5rem;
            opacity: 1;
        }
    }
`;

const ChevronBTN = styled.button`
    background-color: transparent;
    border: none;
    span {
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
            <div>
                <Waterfall id="header-art_textbox">
                    <h1 id="header-art_h1">Jerm Estes</h1>
                    <h2 id="header-art_textbox_waterfall">Web developer<br />Designer<br />Creator</h2>
                    <ChevronBTN><span></span></ChevronBTN>
                </Waterfall>

                <HeroPic id="header-art_picture">
                    <source media="(min-width: 750px)" srcset={Hero} />
                    <source media="(max-width: 750px)" srcset={Hero_wide} />
                    <img src={Hero_wide} className="header-art_picture_img" alt="Jerm dribbling while coding" />
                </HeroPic>
            </div>
        );
    }
}

export default Landing;