import React, { Component } from 'react';

//make this into array of objects with the project titles, descriptions, and images.
const projects = [1,2,3,4,5,6];

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 1,
            totalSlides: projects.length,
            topArrow: "grey",
            bottomArrow: "black"
        };
        //this.projToggleBackward = this.projToggleBackward.bind(this);
        //this.projToggleForward = this.projToggleForward.bind(this);
    }

    //Action when the DOWN/RIGHT (forwards) arrow is clicked
    projToggleForward(arrow) {
        switch(this.state.currentSlide) {
            //Clicked at the last slide (do nothing)
            case this.state.totalSlides:
                break
            //Clicked at second-to-last/going-to-last slide (make down/right arrow light)
            case this.state.totalSlides - 1:
                this.setState({bottomArrow: "grey",currentSlide: this.state.currentSlide+1});
            //Clicked at first/going-to-2nd slide (make up/left arrow dark)
            case 1:
                this.setState({topArrow: "black",currentSlide: this.state.currentSlide+1});
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
                this.setState({topArrow: "grey",currentSlide: this.state.currentSlide-1});
                break
            //Clicked at the last slide (make down/right arrow dark)
            case this.state.totalSlides:
                this.setState({bottomArrow: "black",currentSlide: this.state.currentSlide-1});
                break
            //For any of the slides in the middle, where color isn't affected
            default:
                this.setState({currentSlide: this.state.currentSlide-1});
        }
    }

    render() {
        return (
            <div>
                { /*the clicker*/ }
                <div>
                    <svg width="250" height="250">
                        <polygon fill={this.state.topArrow} points="0,250 125,125 250,250" 
                        id="arrowBackward" arrow="backward" onClick={(e) => {this.projToggleBackward(e)}}/>
                    </svg>

                    <p><span>{this.state.currentSlide}</span>
                        <span>|</span>
                        <span>{this.state.totalSlides}</span>
                    </p>
                    
                    <svg width="250" height="250">
                        <polygon fill={this.state.bottomArrow} points="0,0 125,125 250,0" 
                        id="arrowForward" arrow="forward" onClick={(e) => {this.projToggleForward(e)}}/>
                    </svg>
                </div>

                { /* the project name & description*/ }
                <div id="project-desc">
                </div>

                { /*the project image*/ }
                <img alt="project"></img>
            </div>
        );
    }
}

export default Work;