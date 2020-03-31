import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';
import AboutBlock from './AboutBlock';

let aboutList = [
    {
        image: Aboutpic,
        opener: "My name is Jeremy,",
        body: "but most just call me Jerm. I'm a web developer from Philadelphia, with an all-around IT background. The technologies I have experience with include HTML5, CSS3 (and Sass), JavaScript, ReactJS, PHP, and MySQL."
    },
    {
        image: Aboutpic,
        opener: "In June 2019,",
        body: "I graduated from Drexel University with a Bachelor’s of Science in Information Technology.. During my time, I completed 18 months of full time work in the IT field. I also minored in Interactive Digital Media and finished my undergrad career with a 3.10 GPA."
    },
    {
        image: Aboutpic,
        opener: "Today,",
        body: "I work as a Web Support Developer at Eastern Standard. In my role, I perform bug-fixes (front and back-end) for client websites, along with site maintenance and content management. Many of these sites are Drupal or Wordpress sites."
    }
];

const About = () => {
    return (
        <section id="about" className="react-transition swipe-up">
            {aboutList.map(block => {
                return(
                    <AboutBlock image={block.image} opener={block.opener} body={block.body} />
                )
            })}
        </section>
    );
};

export default About;