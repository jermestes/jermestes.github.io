import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';

const AboutContainer = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 1.3125rem 0;
    color: ${props => props.theme.darkgrey};
    a, a:visited {
        color: ${props => props.theme.darkgrey};
        text-decoration: none;
    }
    img, #intro {
        width: 90%;
        max-width: 24.75rem;
    }
    .content {
        grid-column: 2/3;
        grid-row: 1/2;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
    }
    
    h2 {
        text-align: center;
        font-weight: 400;
        font-size: 2.25rem;
        @media screen and (min-width: 66rem) {
            text-align: left;
        }
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        display: grid;
        grid-template-columns: 1.5fr 9fr 1.5fr;
        grid-template-rows: auto;
        #intro {
            padding-left: 1.75rem;
        }
        .content {
            flex-flow: row wrap;
            grid-column: 2/3;
            grid-row: 1/2;
        }
    }   

    #intro {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
    
`;

class About extends Component {
    render() {
        return (
            <AboutContainer>
                <div className="content">
                    <img src={Aboutpic} className="about-pic" alt="Illustrated self-portrait of Jerm"/>
                    <div id="intro" className="main_sub-secs">
                        <h2>Intro</h2>
                        <p>
                            My name is Jeremy, but most just call me Jerm. I'm a web developer and designer with an all-around
                            IT background. I've recently graduated from college and am now available for hire.&nbsp;
                            <Link to="../work"><strong>See my work</strong></Link>
                        </p>
                                    
                    </div>
                </div>
            </AboutContainer>
        );
    }
}

export default About;