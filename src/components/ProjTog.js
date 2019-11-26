import React, { Component } from 'react';

class Project extends Component {
    render() {
        let projectRender;
        if(this.props.projState.length == 0) {
            projectRender = <div>loading</div>
        } else {
            let currentProject = this.props.projects[this.props.projState.currentSlide-1];
            projectRender = 
            <div class="work-details">
                <div className="work-img-container"> 
                    <img className="sub-sec" src={currentProject.imgSrc} alt={`${currentProject.name} project`}></img>
                </div>
                
                <div className="sub-sec" id="project-desc">
                    <h2>{currentProject.name}</h2>
                    <p>{currentProject.desc}</p>
                    
                    <a href={currentProject.link1} target="_BLANK" rel="noopener noreferrer"> <button>{currentProject.linkTypes[0]}</button></a>

                    {currentProject.linkTypes[1] === null ? (null) : 
                    (<a href={currentProject.link2} target="_BLANK" rel="noopener noreferrer"> <button>{currentProject.linkTypes[1]}</button></a>)}
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
                <svg width="50" height="50">
                    <polygon fill={this.props.projState.topArrow} points="0,50 25,25 50,50" 
                    id="arrowBackward" arrow="backward" onClick={(e) => {this.props.toggleBack(e)}}/>
                </svg>

                <p>{this.props.projState.currentSlide} / {this.props.projState.totalSlides}</p>
                
                
                <svg width="50" height="50">
                    <polygon fill={this.props.projState.bottomArrow} points="0,0 25,25 50,0" 
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