import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="page">
      <h2>My Profile</h2>
      <input placeholder="Your name" className="input" />
      <input placeholder="What are you up for?" className="input" />
      <Link to="/">Back to Home</Link>
    </div>
  );
}