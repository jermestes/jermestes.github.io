import React, { Component } from 'react';
import styled from 'styled-components';
import LinkList, {EmailForm as Form} from './ContactUI';

const ContactContainer = styled.div`
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: center;
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        justify-content: flex-end;
    }
    align-items: center;
    grid-column: 2/3;
    grid-row: 1/2;
    div:nth-of-type(1) {
        margin: 0 6.25rem;
    }
    div {
        text-align: center;
        align-content: center;
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
            font-family: ${props => props.theme.primaryfont}
            background-color: ${props => props.theme.green};
            border-color: ${props => props.theme.darkgrey};
            width: 25rem;
            height: 2rem;
            cursor: pointer;
            text-transform: uppercase;
            :hover {
                background-color: white;
                border-color: black;
                color: black;
            }   
        }
    }
    }

    ul {
        text-transform: capitalize;
        li {
            padding: 1rem 0;
            
            a {
                text-decoration: none;
            }
        }
    }
`;

class Contact extends Component {
    render() {
        return (
            <main>
                <ContactContainer className="content">
                    <Form />
                    <LinkList />
                </ContactContainer>
            </main>
        );
    }
}

export default Contact;