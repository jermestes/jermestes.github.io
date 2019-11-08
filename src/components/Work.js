import React, { Component } from 'react';
import IDM364 from '../assets/project-pics/idm364.svg';
import IDM231 from '../assets/project-pics/idm231.PNG';
import IDM211 from '../assets/project-pics/idm211.PNG';
import Vinyl from '../assets/project-pics/vinyl.png';
import {Project, Toggle} from './ProjTog';

//THE PROJECTS OBJECT - The name, description, image, and links for all my projects.
const projects = [
    {
        name: 'The BAKEd Sale',
        desc: 'A real-time app for a fictitious food ordering service, where price and quantity can change at a moments notice. The app was built with ReactJS and uses Firebase for the backend data.', 
        imgSrc: IDM364, 
        liveLink: 'https://bakesale.jermestes.com',
        codeLink: 'https://github.com/jermestes/idm364'
    } ,
    { 
        name: 'NBA Zodiac',
        desc: 'The term project for my Scripting class was to create a custom zodiac web page based upon the Zodiac Algorithm. Users can enter a birth-date or choose a sign to see & hear a unique zodiac. This was coded in Vanilla JavaScript and images for the 12 signs were done in Adobe Photoshop.', 
        imgSrc: IDM231,
        liveLink: 'https://jermestes.com/idm231',
        codeLink: 'https://github.com/jermestes/idm231'
    } ,
    {
        name: 'iTunes Redesign',
        desc: `My UI Design course's term project tasked us with making a prototype which redesigns the UI of an existing desktop website or application. I took a slightly different approach, by reimagining Apple's iTunes as a browser player that mirrors Apple Music on iPhone. The project was developed and deployed with AdobeXD.`,
        imgSrc: IDM211,
        liveLink: 'https://xd.adobe.com/view/d9e6064d-f5ff-4585-6456-15c6a99b3c27-afd7/?hints=off',
        codeLink: ''
    } ,
    {
        name: 'VinylDNS',
        desc: `Drexel CCI Senior project, where our team worked to overhauled Comcast's VinylDNS web client. VinylDNS is a vendor-agnostic DNS management system. The team worked to recode the portal in ScalaJS (to match with the API) while also making the interface more user-friendly. I worked on UI prototyping and documentation. `,
        imgSrc: Vinyl,
        liveLink: 'http://www.cci.drexel.edu/SeniorDesign/2018_2019/VinylDNS/index.html',
        codeLink: ''
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