import React, { Component } from 'react';
import styled from 'styled-components';
import LinkList, {EmailForm as Form} from './Statics';

const ContactContainer = styled.main`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 1.3125rem;
    h2 {
      color: ${props => props.theme.darkgrey};
      font-weight: 500;
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        display: grid;
        grid-template-columns: 1.5fr 10fr .5fr;
        grid-template-rows: auto;
        padding: 1.3125rem 0;
        align-items: center;
    }
    div:nth-of-type(1) {
        margin: auto;
    }
    div {
        grid-column: 1/3;
        grid-row: 1/2;
        text-align: center;
        align-content: center;
        justify-self: center;
        h2 {
            font-size: 2.25rem;
        }
        form {
            display: flex;
            flex-flow: column nowrap;
            width: 25rem;
        input, textarea {
            padding: .25rem 0 .25rem .25rem;
        }
        >* {
            margin-bottom: 2rem;
            border: 1px solid ${props => props.theme.darkgrey};
        }
        textarea {
            height: 10rem;
            font-family: "Roboto";
        }
        button {
            font-family: ${props => props.theme.primaryfont};
            font-size: 1.25rem;
            background-color: ${props => props.theme.lightgrey};
            border: 3px solid ${props => props.theme.green};
            width: 25rem;
            height: 2rem;
            cursor: pointer;
            text-transform: uppercase;
            :hover {
                background-color: ${props => props.theme.green};
                color: white;
            }   
        }
    }
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around; 
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: start;
        text-transform: capitalize;
        li {
            padding: 1.5rem;
            @media screen and (min-width: ${props => props.theme.nowDesktop}) {
                padding: 1rem 0;
            }
            a {
                text-decoration: none;
            }
        }
        @media screen and (min-width: ${props => props.theme.nowDesktop}) {
            display: block;
        }
    }
`;

class Contact extends Component {
    render() {
        return (
            <ContactContainer className="content">
                <Form />
                <LinkList />
            </ContactContainer>
        );
    }
}

export default Contact;