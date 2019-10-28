import React, { Component } from 'react';
import styled from 'styled-components';
import IDM364 from '../assets/project-pics/idm364.svg';
import IDM231 from '../assets/project-pics/idm231.PNG';
import IDM211 from '../assets/project-pics/idm211.PNG';
import Vinyl from '../assets/project-pics/vinyl.png';


//THE PROJECTS OBJECT - The name, description, image, and links for all my projects.
const projects = [
    {
        name: 'The BAKEd Sale',
        desc: 'For my Interactive App Design class, the term project was a real-time app for a fictitious food ordering service where price and quantity available are variable and can change at a moments notice. The app was built with ReactJS and uses Firebase for the backend.', 
        imgSrc: IDM364, 
        liveLink: 'https://thebakedsale.jermestes.com',
        codeLink: 'https://github.com/jermestes/idm364'
    } ,
    { 
        name: 'NBA Zodiac',
        desc: 'The term project for my Scripting I class was to create a custom zodiac web page based upon the Zodiac Algorithm. A user could enter a birth-date or choose a sign to see & hear a unique zodiac. This was coded in Vanilla JavaScript and images for the 12 signs were done in Adobe Photoshop.', 
        imgSrc: IDM231,
        liveLink: 'https://jermestes.com/idm231',
        codeLink: 'https://github.com/jermestes/idm231'
    } ,
    {
        name: 'iTunes Redesign',
        desc: 'My UI Design courses term project task was to make a prototype which redesigns the UI of an existing desktop website or application.  ',
        imgSrc: IDM211,
        liveLink: 'https://xd.adobe.com/view/d9e6064d-f5ff-4585-6456-15c6a99b3c27-afd7/?hints=off',
        codeLink: ''
    } ,
    {
        name: 'VinylDNS',
        desc: 'Drexel CCI Senior project, where our team worked to overhauled Comcasts VinylDNS web client. I worked on UI prototyping and documentation.',
        imgSrc: Vinyl,
        liveLink: 'http://www.cci.drexel.edu/SeniorDesign/2018_2019/VinylDNS/index.html',
        codeLink: ''
    }  
];

const Container = styled.main`
    display: flex;
    flex-flow: row-reverse wrap;
    align-content: center;
    justify-content: center;
    padding: 1.3125rem 0;
    color: ${props => props.theme.darkgrey};
    img {
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
        font-weight: 500;
        font-size: 2.25rem;
        @media screen and (min-width: 66rem) {
            text-align: left;
        }
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        display: grid;
        grid-template-columns: 1.5fr 9fr 1.5fr;
        grid-template-rows: auto;
        .content {
            flex-flow: row wrap;
            grid-column: 2/3;
            grid-row: 1/2;
        }
    }   
`

const ProjTog = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    justify-content: center;
    svg {
        cursor: pointer;
    }
`;

const ProjView = styled.div`
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: center;
    img {
        width: 400px;
    }
`;

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 1,
            totalSlides: projects.length,
            topArrow: "#C4C4C4",
            bottomArrow: "#7b7879"
        };
    }

    //Action when the DOWN/RIGHT (forwards) arrow is clicked
    projToggleForward(arrow) {
        switch(this.state.currentSlide) {
            //Clicked at the last slide (do nothing)
            case this.state.totalSlides:
                break
            //Clicked at second-to-last/going-to-last slide (make down/right arrow light)
            case this.state.totalSlides - 1:
                this.setState({bottomArrow: "#C4C4C4",currentSlide: this.state.currentSlide+1});
                break
            //Clicked at first/going-to-2nd slide (make up/left arrow dark)
            case 1:
                this.setState({topArrow: "#7b7879",currentSlide: this.state.currentSlide+1});
                break
            //For any of the slides in the middle, where color isn't affected
            default:
                this.setState({currentSlide: this.state.currentSlide+1});
        }
    }

    //Action when the UP/LEFT (backwards) arrow is clicked
    projToggleBackward(arrow) {
        switch(this.state.currentSlide) {
            //Clicked at the first slide (do nothing)
            case 1:
                break
            //Clicked at the 2nd slide (make up/left arrow light)
            case 2:
                this.setState({topArrow: "#C4C4C4",currentSlide: this.state.currentSlide-1});
                break
            //Clicked at the last slide (make down/right arrow dark)
            case this.state.totalSlides:
                this.setState({bottomArrow: "#7b7879",currentSlide: this.state.currentSlide-1});
                break
            //For any of the slides in the middle, where color isn't affected
            default:
                this.setState({currentSlide: this.state.currentSlide-1});
        }
    }

    render() {
        return (
            <Container>
                <div className="content">
                    { /* the project name & description*/ }
                    <ProjView id="projView">
                    { /*the project image*/ }
                        <img src={projects[this.state.currentSlide-1].imgSrc} alt={`${projects[this.state.currentSlide-1].name} project`}></img>
                        <div id="project-desc">
                            <h2>{projects[this.state.currentSlide-1].name}</h2>
                            <p>{projects[this.state.currentSlide-1].desc}</p>
                        </div>
                    </ProjView>

                    { /*the clicker*/ }
                    <ProjTog>
                        <svg width="50" height="50">
                            <polygon fill={this.state.topArrow} points="0,50 25,25 50,50" 
                            id="arrowBackward" arrow="backward" onClick={(e) => {this.projToggleBackward(e)}}/>
                        </svg>

                        <p><span>{this.state.currentSlide}/{this.state.totalSlides}</span>
                        </p>
                        
                        <svg width="50" height="50">
                            <polygon fill={this.state.bottomArrow} points="0,0 25,25 50,0" 
                            id="arrowForward" arrow="forward" onClick={(e) => {this.projToggleForward(e)}}/>
                        </svg>
                    </ProjTog>
                </div>
            </Container>
        );
    }
}

export default Work;