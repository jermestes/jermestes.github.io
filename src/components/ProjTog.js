import React, { Component } from 'react';

class Project extends Component {
    render() {
        let projectRender;
        if(this.props.projState.length == 0) {
            projectRender = <div>loading</div>
        } else {
            projectRender = 
            <div class="work-details">
                <img className="sub-sec" src={this.props.projects[this.props.projState.currentSlide-1].imgSrc} alt={`${this.props.projects[this.props.projState.currentSlide-1].name} project`}></img>
                <div className="sub-sec" id="project-desc">
                    <h2>{this.props.projects[this.props.projState.currentSlide-1].name}</h2>
                    <p>{this.props.projects[this.props.projState.currentSlide-1].desc}</p>
                    
                    {this.props.projects[this.props.projState.currentSlide-1].liveLink === '' ? (null) : 
                    (<a href={this.props.projects[this.props.projState.currentSlide-1].liveLink} target="_BLANK" rel="noopener noreferrer"> <button>View Live</button></a>)}

                    {this.props.projects[this.props.projState.currentSlide-1].codeLink === '' ? (null) : 
                    (<a href={this.props.projects[this.props.projState.currentSlide-1].codeLink} target="_BLANK" rel="noopener noreferrer"> <button>View Code</button></a>)}
                </div>
            </div>
        }

        return (
            <React.Fragment>
                {projectRender}
            </React.Fragment>
        );
    }
}

class Toggle extends Component {
    render() {
        let toggleRender;
        if(this.props.projState.length == 0) {
            toggleRender = <div> -> </div>
        } else {
            toggleRender =
            <div className="sub-sec work-toggle">
                <svg width="30" height="30">
                    <polygon fill={this.props.projState.topArrow} points="0,30 15,15 30,30" 
                    id="arrowBackward" arrow="backward" onClick={(e) => {this.props.toggleBack(e)}}/>
                </svg>

                <p>{this.props.projState.currentSlide} / {this.props.projState.totalSlides}</p>
                
                
                <svg width="30" height="30">
                    <polygon fill={this.props.projState.bottomArrow} points="0,0 15,15 30,0" 
                    id="arrowForward" arrow="forward" onClick={(e) => {this.props.toggleFwd(e)}}/>
                </svg>
            </div>
        }
        return (
            <React.Fragment>
                {toggleRender}
            </React.Fragment>
            
        );
    }
}


export {Project, Toggle};