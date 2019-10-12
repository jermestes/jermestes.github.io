import React, { Component } from 'react';

let test = document.querySelector("span");
console.log(test);

//the toggle arrow that points up or to the left
const arrowBackward = document.getElementById("arrowBackward");
console.log(arrowBackward);

//the toggle arrow that points down or the right
const arrowForward = document.querySelector("#arrowForward");
console.log(arrowForward);

//both arrows
const arrows = [arrowBackward, arrowForward];

const projects = [1,2,3];

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 1,
            totalSlides: projects.length
        }
    }

    //Change btn color from dark to light or vice versa
    //To symbolize user can't scroll further up or down projects slides
    colorChange = () => {
        arrows.forEach(arrow => {
            if (arrowBackward.target.style.fill == "black") {
                arrowBackward.target.style.fill = "grey";
                console.log('hello');
            } else {
                arrowBackward.target.style.fill = "black";
                console.log('goodbye');
            } 
        });    
    }

    slideNumChange = () => {
        console.log(arrows);
        /*if (arrowBackward.id == "arrowBackward") {
            console.log('hello');
            this.setState({currentSlide: this.state.currentSlide-1});
        } else {
            this.setState({currentSlide: this.state.currentSlide+1});
            console.log('goodbye');
        } */
    }

    //Action when the bottom/right (forwards) arrow is clicked
    projToggleForward = () => {
        switch(this.state.currentSlide) {
            //The end of the slides
            case this.state.totalSlides:
                break
            //Going to the last slide or away from the first
            case this.state.totalSlides - 1:
            case 1:
                this.slideNumChange();
                this.colorChange();
                break
            //For any of the slides in the middle, where color isn't affected
            default:
                this.slideNumChange();
        }
    }

    //Action when the top/left arrow is clicked
    projToggleBackward = () => {
        switch(this.state.currentSlide) {
            //The start of the slides
            case 1:
                break
            //Going to the first slide or away from the last slide
            case 2:
            case this.state.totalSlides:
                this.slideNumChange();
                this.colorChange();
                break
            //For any of the slides in the middle, where color isn't affected
            default:
                this.slideNumChange();
        }
    }

    render() {
        return (
            <div>
                { /*the clicker*/ }
                <div>
                    <svg width="250" height="250">
                        <polygon fill={props => props.theme.darkgrey} points="0,250 125,125 250,250" 
                        id="arrowBackward" onClick={this.projToggleBackward}/>
                    </svg>

                    <p><span>{this.state.currentSlide}</span>
                        <span>|</span>
                        <span>{this.state.totalSlides}</span>
                    </p>
                    
                    <svg width="250" height="250">
                        <polygon fill="black" points="0,0 125,125 250,0" 
                        id="arrowForward" onClick={this.projToggleForward}/>
                    </svg>
                </div>

                { /* the project name & description*/ }
                <div id="project-desc">
                </div>

                { /*the project image*/ }
                <img></img>
            </div>
        );
    }
}

export default Work;