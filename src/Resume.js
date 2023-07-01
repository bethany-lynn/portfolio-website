import React from 'react';
import './Resume.css'
// import { Document, Page } from 'react-pdf';
// import ResumePDF from '../public/resume.pdf'

function Resume() {
    return (
        <div className='resume-body'>
          <h1>Resume</h1>
            <iframe src="https://drive.google.com/file/d/1jyAruxzs4i4Q3RpT3L-rRXDFToODz7wH/preview" 
            title="Embedded PDF" 
            width="540" height="750" allow="autoplay">
            </iframe>
        </div>
    );
}

export default Resume;