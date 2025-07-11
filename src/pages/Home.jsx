import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to NearCircle</h1>
      <p>Meet real people, right here, right now.</p>
      <Link to="/nearby">See Who's Nearby</Link> | <Link to="/profile">My Profile</Link>
    </div>
  );
}