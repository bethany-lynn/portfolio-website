import React from 'react';
import './Resume.css';

function Resume() {
  const downloadResume = () => {
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/uc?export=download&id=1jyAruxzs4i4Q3RpT3L-rRXDFToODz7wH';
      link.download = 'resume.pdf';
      link.click();
  };

  return (
    <div className='resume-body'>
      <iframe
        src="https://drive.google.com/file/d/1jyAruxzs4i4Q3RpT3L-rRXDFToODz7wH/preview"
        title="Embedded PDF"
        width="940"
        height="1150"
        allow="autoplay"
      ></iframe>
    <div className="download-button">
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  </div>
);
}

export default Resume;
