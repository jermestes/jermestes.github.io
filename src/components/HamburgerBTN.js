import React, { Component } from 'react';
import styled from 'styled-components';

const screenBreakpoint1 = '900px';

//Hamburger button for mobile/small screen navigation
const Hamburger = styled.button`
    width: auto;
    z-index: 40;
    cursor: pointer;
    align-self: center;
    justify-self: end;
    border: none;
    grid-column: 3/4;
    grid-row: 1/3;
    display: flex;
    flex-flow: column nowrap;
    align-items: end;
    padding: 0 1rem 0 0;
    @media screen and (min-width: ${screenBreakpoint1}) {
        display: none;
    }
    div {
        transition: transform 500ms ease-in;
        height: 5.65px;
        background-color: grey;
        margin: .25rem 0;
    }
    div:first-child {
        transform-origin: top right;
        width: 47px;
    }
    div:nth-child(2) {
        width: 36px;
        transition: opacity 600ms;
    }
    div:last-child {
        transform-origin: bottom right;
        width: 25px;
    }
`;

class HamburgerBTN extends Component {
    mobileAction = () => {
        //identify the the hamburger btn & link list
        const btn = document.querySelector('#hamburger');
        const Menu = document.querySelector('#burger');
        //toggle their active class
        Menu.classList.toggle('open');
        btn.classList.toggle('x');      
    }
    
    render() {
        return (
            <Hamburger id="hamburger" onClick={this.mobileAction}>
                <div></div>  
                <div></div>  
                <div></div>                
            </Hamburger>
        );
    }
}

export default HamburgerBTN;