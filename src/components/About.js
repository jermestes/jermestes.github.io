import React from 'react';
import Aboutpic from '../assets/BMoviePoster-cropped.jpg';
import Gradpic from '../assets/grad-jerm2.jpg';
import Workpic from '../assets/work2.jpg';

let aboutList = [
    {
        image: Aboutpic,
        opener: "My name is Jeremy,",
        body: "but most just call me Jerm. I'm a web developer from Philadelphia, with an all-around IT background. The technologies I have experience with include HTML5, CSS3/Sass, JavaScript, ReactJS, PHP, and MySQL. For over 5 years, I've worked as a Web Support Developer. In my role, I perform bug-fixes (front and back-end) for client websites, along with site maintenance and content management. Many of these sites are Drupal or Wordpress sites."
    }
];

const AboutBlock = (props) => {
    return (
      <div className="about-block">
        <img className="about-block_img" src={props.image} alt={props.alt} />
        <div className="about-block_text">
          <h2>{props.opener}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    );
  };


const About = (props) => {
    let swipe;
    console.log(props.swipe);
    if(props.swipe == true) {
        swipe = "swipe-up";
    } else {
        swipe = " asfdg";
    }
    return (
        <section className={`react-transition about ` + swipe}>
            <h1>About Me</h1>
            <div id="about" className="container">
                {aboutList.map(block => {
                    return(
                        <AboutBlock key={block.opener} image={block.image} opener={block.opener} body={block.body} />
                    )
                })}
            </div> 
        </section>
        
    );
};

export default About;