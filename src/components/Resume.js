import React from 'react';
const Education = () => {
    return (
        <section className="education resume-sec">
            <h2>Education</h2>
            <h3>Drexel University (Philadelphia, PA)</h3>
            <h4>Bachelor's of Science in Information Technology</h4>
            <ul>
                <li><strong>Minor:</strong> Interactive Digital Media</li>
                <li><strong>Honors:</strong> Recipient of the Liberty Scholars Scholarship (2014-2019)</li>
                <li><strong>GPA:</strong> 3.10</li>
            </ul>
        </section>
    );
}

const Skills = () => {
    return (
        <section className="skills resume-sec">
            <h2>Skills/Tools</h2>
            <h3>Development</h3>
            <p>HTML, CSS, SASS, JavaScript, ReactJS, PHP, MySQL/MariaDB, Drupal</p>
            <h3>Design</h3>
            <p>UI/UX Design, Adobe XD, Figma, Adobe Photoshop and Illustrator</p>
        </section>
    )
}

const Experience = () => {
    return(
    <div className="experience resume-sec">
                <h2>Professional Experience</h2>
                <div className="job">
                    <div>
                        <h3>Web Support Developer</h3>
                        <h4>Eastern Standard (Jan 2020 - Present)</h4>
                    </div>
                <ul className="job-description">
                        <li>Troubleshooting, debugging, testing and applying fixes to existing code, front- and back-end</li>
                        <li>Manage support tickets, including communication with clients and making/tracking time estimates</li>
                        <li>Managing support tickets, including client communication and tracking time estimates</li>
                    </ul> 
                </div>
                
                <div className="job">
                    <div>
                        <h3>Technical Support Specialist</h3>
                        <h4>Drexel University IT (Mar 2017 - Sep 2018)</h4>
                    </div>
                    <ul className="job-description">
                        <li>Provided first and second level support over the phone to a student body of over 24,000 students and 2,000 faculty</li>
                        <li>Assisted walk-in customers with technical issues while supervising Drexel’s Tech Lounge.</li>
                        <li>Created, modified, and responded to tickets that were sent to Drexel IT</li>
                    </ul>
                </div>
                
                <div className="job">
                    <div>
                        <h3>Helpdesk Support Co-op</h3>
                        <h4>Annenberg School for Communication - UPenn (Mar - Sep 2016)</h4>
                    </div>
                    <ul className="job-description">
                        <li>Troubleshot software and hardware issues for faculty, staff, and students both in-person and overthephone.</li>
                        <li>Created support tickets and assigned them to other IT staff members as appropriate.</li>
                        <li>Maintained classroom and office technology</li>
                    </ul>
                </div>
            </div>
    );
}

const Resume = () => {
    return (
        <section id="resume">
            <div>
                <h1>Resume</h1>
            </div>
            <div className="resume-sec-container">
                <Education />
                <Skills />     
                <Experience />  
            </div>
        </section>
    );
};

export default Resume;