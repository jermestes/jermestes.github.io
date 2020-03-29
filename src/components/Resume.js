import React from 'react';
import Pdf from '../assets/jeremyestes_resume.pdf';

const Resume = () => {
    return (
        <div>
            <a href={Pdf} className="nav-link resumeLink" target="_BLANK" rel="noopener noreferrer" >PDF</a>
        </div>
    );
};

export default Resume;