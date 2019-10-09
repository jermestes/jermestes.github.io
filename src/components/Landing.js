import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../assets/hero.jpg';
import Hero_wide from '../assets/hero-wide.jpg';

const Waterfall = styled.div`
    text-transform: uppercase;
    text-align: center;
    z-index: 30;
    position: relative;
    align-self: center;
    @media screen and (min-width: 700px) {
        display: block;
        grid-column: 1/7;
        justify-self: end;
        line-height: 3rem;
        padding-right: 1rem;
        text-align: right;
        align-self: start;
    }
    button {
        background-color: transparent;
        border: none;
        width: 70px;
        height: 40px;
    }
`;

const Hero_pic = styled.picture`
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

class Header_art extends Component {
    render() {
        return (
            <div>
                <Waterfall id="header-art_textbox">
                    <h1 id="header-art_h1">Jerm Estes</h1>
                    <h2 id="header-art_textbox_waterfall">Web developer<br />Designer<br />Creator</h2>
                    <button><span id="header-art_chevron"></span></button>
                </Waterfall>

                <Hero_pic id="header-art_picture">
                    <source media="(min-width: 750px)" srcset={Hero} />
                    <source media="(max-width: 750px)" srcset={Hero_wide} />
                    <img src={Hero_wide} className="header-art_picture_img" alt="Jerm dribbling while coding" />
                </Hero_pic>
            </div>
        );
    }
}

export default Header_art;