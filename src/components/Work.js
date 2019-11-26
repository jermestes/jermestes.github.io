import React, { Component } from 'react';
import IDM364 from '../assets/project-pics/idm364.svg';
import IDM231 from '../assets/project-pics/idm231.jpg';
import IDM211 from '../assets/project-pics/idm211.PNG';
import Vinyl from '../assets/project-pics/vinyl.png';
import {Project, Toggle} from './ProjTog';

//THE PROJECTS OBJECT - The name, description, image, and links for all my projects.
const projects = [
    {
        name: 'The BAKEd Sale',
        desc: 'A ReactJS webapp for a fictitious food ordering service. Users can place/edit orders as a customer and make changes to menu items as an admin. Changes in menu data are reflected in realtime via Firebase. Further details can be found at the Github repo link below.', 
        imgSrc: IDM364, 
        link1: 'https://bakesale.jermestes.com',
        link2: 'https://github.com/jermestes/idm364-jje56',
        linkTypes: ['View Live','View Code']
    } ,
    { 
        name: 'NBA Zodiac',
        desc: 'A web page that serves users a unique NBA player, message, and sound based on the sign chosen or birthdate entered. Coded in HTML, CSS, and Vanilla JS. Images edited in Adobe Photoshop. Further details can be found at the Github repo link below.', 
        imgSrc: IDM231,
        link1: 'https://jermestes.com/idm231',
        link2: 'https://github.com/jermestes/idm231-jje56',
        linkTypes: ['View Live','View Code']
    } ,
    {
        name: 'iTunes Redesign',
        desc: `The term project for my UI Design course was to make a prototype which redesigns the UI of an existing desktop site or application. I took a different approach, by reimagining Apple iTunes as a browser player that creates parity with Apple Music's iPhone app. Created and deployed with AdobeXD.`,
        imgSrc: IDM211,
        link1: 'https://xd.adobe.com/view/d9e6064d-f5ff-4585-6456-15c6a99b3c27-afd7/?hints=off',
        link2: null,
        linkTypes: ['View Demo',null]
    } ,
    {
        name: 'VinylDNS',
        desc: `Drexel CCI Senior project, where our team worked to overhaul the web client for Comcast's VinylDNS, a vendor-agnostic DNS management system. The team worked to recode the portal in ScalaJS (to match with the API) while also making the interface more user-friendly. I worked on UI prototyping and documentation. `,
        imgSrc: Vinyl,
        link1: 'http://www.cci.drexel.edu/SeniorDesign/2018_2019/VinylDNS/index.html',
        link2: null,
        linkTypes: ['More Info',null]
    }  
];

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
    toggleFwd(arrow) {
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
    toggleBack(arrow) {
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
            <section id="work">
                <Project projects={projects} projState={this.state}/>
                <Toggle projects={projects} projState={this.state} toggleFwd={this.toggleFwd.bind(this)} toggleBack={this.toggleBack.bind(this)}/>
            </section>
        );
    }
}

export default Work;