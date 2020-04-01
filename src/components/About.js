import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';
import Gradpic from '../assets/grad-jerm2.jpg';
import Workpic from '../assets/work2.jpg';
import AboutBlock from './AboutBlock';

let aboutList = [
    {
        image: Aboutpic,
        opener: "My name is Jeremy,",
        body: "but most just call me Jerm. I'm a web developer from Philadelphia, with an all-around IT background. The technologies I have experience with include HTML5, CSS3 (and Sass), JavaScript, ReactJS, PHP, and MySQL."
    },
    {
        image: Gradpic,
        opener: "In June 2019,",
        body: "I graduated from Drexel University with a Bachelor’s of Science in Information Technology.. During my time, I completed 18 months of full time work in the IT field. I also minored in Interactive Digital Media and finished my undergrad career with a 3.10 GPA."
    },
    {
        image: Workpic,
        opener: "Today,",
        body: "I work as a Web Support Developer at Eastern Standard. In my role, I perform bug-fixes (front and back-end) for client websites, along with site maintenance and content management. Many of these sites are Drupal or Wordpress sites."
    }
];

const About = () => {
    return (
        <main className="react-transition swipe-up">
            <h1>About Me</h1>
            <section id="about">
                {aboutList.map(block => {
                    return(
                        <AboutBlock image={block.image} opener={block.opener} body={block.body} />
                    )
                })}
            </section> 
        </main>
        
    );
};

export default About;