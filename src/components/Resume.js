import React from 'react';
import Pdf from '../assets/jeremyestes_resume.pdf';

const Resume = () => {
    return (
        <main id="resume">
            <div>
                <h1>Resume</h1>
                <a href={Pdf} className="nav-link resumeLink" target="_BLANK" rel="noopener noreferrer" >PDF</a>
            </div>          

            <section className="experience">
                <h2>Professional Experience</h2>
                <div className="job">
                    <div>
                        <h3>Web Support Developer at Eastern Standard</h3>
                        <h4>Jan 2020 - Present</h4>
                    </div>
                <ul className="job-description">
                        <li>Troubleshooting, debugging, testing and applying fixes to existing code, front- and back-end</li>
                        <li>Manage support tickets, including communication with clients and making/tracking time estimates</li>
                        <li>Managing support tickets, including client communication and tracking time estimates</li>
                    </ul> 
                </div>
                
                <div className="job">
                    <div>
                        <h3>Technical Support Specialist at Drexel University IT</h3>
                        <h4>March 2017 - Sep 2018</h4>
                    </div>
                    <ul className="job-description">
                        <li>Provided first and second level support over the phone to a student body of over 24,000 students and 2,000 faculty</li>
                        <li>Assisted walk-in customers with technical issues while supervising Drexel’s Tech Lounge.</li>
                        <li>Created, modified, and responded to tickets that were sent to Drexel IT</li>
                    </ul>
                </div>
                
                <div className="job">
                    <div>
                        <h3>Helpdesk Support Co-op at Annenberg School for Communication (UPenn)</h3>
                        <h4>March - September 2016</h4>
                    </div>
                    <ul className="job-description">
                        <li>Troubleshot software and hardware issues for faculty, staff, and students both in-person and overthephone.</li>
                        <li>Created support tickets and assigned them to other IT staff members as appropriate.</li>
                        <li>Maintained classroom and office technology</li>
                    </ul>
                </div>
            </section>
            <section className="education">
                <h2>Education</h2>
            </section>
        </main>
    );
};

export default Resume;