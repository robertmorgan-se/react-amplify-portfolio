import React from 'react';
import './FamilyUpload.css';   // see CSS below

export default function FamilyUpload() {
  return (
    <div className="family-upload-card">
      <h1 className="family-upload-title">Family Uploads</h1>
      <p>Please click the button below to upload photos, videos, or compressed files of Papa and/or Nanny for the memorial video.</p>
      <br></br>
      <p>If you would like, you could also upload a short video (interview style) talking about your best or favorite memory of Papa and/or Nanny.</p>
      <a
        href="https://forms.gle/9iKNJRfueXFuLBHcA"
        target="_blank"
        rel="noopener noreferrer"
        className="family-upload-button"
      >
        Upload Files
      </a>
    </div>
  );
}
