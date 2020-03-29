import React from 'react';
import IDM364 from '../assets/project-pics/idm364.svg';
import IDM231 from '../assets/project-pics/idm231.jpg';
import IDM211 from '../assets/project-pics/idm211.PNG';
import Vinyl from '../assets/project-pics/vinyl.png';

//THE PROJECTS OBJECT - The name, description, image, and links for all my projects.
const projectList = [
    {
        name: 'The BAKEd Sale',
        desc: 'A ReactJS webapp for a fictitious food ordering service. Users can place/edit orders as a customer and make changes to menu items as an admin. Changes in menu data are reflected in realtime via Firebase.', 
        imgSrc: IDM364, 
        link1: 'https://bakesale.jermestes.com',
        link2: 'https://github.com/jermestes/idm364-jje56',
        linkTypes: ['Live Site','Repository']
    } ,
    { 
        name: 'NBA Zodiac',
        desc: 'A web page that serves users a unique NBA player, message, and sound based on the sign chosen or birthdate entered. Coded in HTML, CSS, and Vanilla JS. Images edited in Adobe Photoshop.', 
        imgSrc: IDM231,
        link1: 'https://jermestes.com/idm231',
        link2: 'https://github.com/jermestes/idm231-jje56',
        linkTypes: ['Live Site','Repository']
    } ,
    {
        name: 'iTunes Redesign',
        desc: `The term project for my UI Design course was to make a prototype which redesigns the UI of an existing desktop site or application. I took a different approach, by reimagining Apple iTunes as a browser player that creates parity with Apple Music's iPhone app. Created and deployed with AdobeXD.`,
        imgSrc: IDM211,
        link1: 'https://xd.adobe.com/view/d9e6064d-f5ff-4585-6456-15c6a99b3c27-afd7/?hints=off',
        link2: null,
        linkTypes: ['Live Demo',null]
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

const Projects = () => {
    return (
        <div className="projects-container">
            {projectList.map(project => {
                return(
                    <div class="work-details">
                        <div className="work-img-container"> 
                            <img className="sub-sec" src={project.imgSrc} alt={`${project.name} project`}></img>
                        </div>
                        
                        <div className="sub-sec" id="project-desc">
                            <h2 className="project-name">{project.name}</h2>
                            <p className="project-desc">{project.desc}</p>
                            <div className="work-btns">
                                <a href={project.link1} target="_BLANK" rel="noopener noreferrer"> <button>{project.linkTypes[0]}</button></a>

                                {project.linkTypes[1] === null ? (null) : 
                                (<a href={project.link2} target="_BLANK" rel="noopener noreferrer"> <button>{project.linkTypes[1]}</button></a>)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Projects;