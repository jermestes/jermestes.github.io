import React, { Component } from 'react';
import styled from 'styled-components';

const screenBreakpoint1 = '900px';

//Hamburger button for mobile/small screen navigation
const Hamburger = styled.button`
    cursor: pointer;
    align-self: center;
    border: none;
    grid-column: 3/4;
    grid-row: 1/3;
    display: flex;
    flex-flow: column nowrap;
    align-items: end;
    @media screen and (min-width: ${screenBreakpoint1}) {
        display: none;
    }
    div {
        height: 5.65px;
        background-color: grey;
        margin: .25rem 0;
    }
    div:first-child {
        width: 47px;
    }
    div:nth-child(2) {
        width: 36px;
    }
    div:last-child {
        width: 25px;
    }
`;

class HamburgerBTN extends Component {
    render() {
        return (
            <Hamburger>
                <div></div>  
                <div></div>  
                <div></div>                
            </Hamburger>
        );
    }
}

export default HamburgerBTN;