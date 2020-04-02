import React, { Component } from 'react';
import Projects from './Projects';

class Work extends Component {
    render() {
        return (
            <section id="work">
                <h1>Projects</h1>
                <Projects className="container" />
            </section>
        );
    }
}

export default Work;