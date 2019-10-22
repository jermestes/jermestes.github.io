import React, { Component } from 'react';
import styled from 'styled-components';
import LinkList, {EmailForm as NewForm} from './ContactUI';

const Emailform = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    order: 2;
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        text-align: center;
        padding: 2rem 4rem 0 0; 
        width: 30rem;
    }
    >* {
        margin-bottom: 2rem;
        border-width: 0 0 .1rem 0;
    }
    textarea {
        height: 10rem;
    }
    button:hover {
        background-color: white;
        border: .125rem solid black;
        color: black;
    }

    form {
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    @media screen and (min-width: $screen-breakpoint1) {
        text-align: center;
        padding: 2rem 4rem 0 0; 
        width: 30rem;
    }
    >* {
        margin-bottom: 2rem;
        border-width: 0 0 .1rem 0;
    }
    textarea {
        height: 10rem;
    }
    button:hover {
        background-color: white;
        border: .125rem solid black;
        color: black;
    }
}

`;

class Contact extends Component {
    render() {
        return (
            <main >
                <div className="content">
                    <NewForm />
                    <LinkList />
                </div>
            </main>
        );
    }
}

export default Contact;