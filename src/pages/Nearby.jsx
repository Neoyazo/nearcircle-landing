import React from 'react';
import { Link } from 'react-router-dom';

export default function Nearby() {
  return (
    <div className="page">
      <h2>People Nearby</h2>
      <ul>
        <li>👤 Alice — Wants to grab a coffee ☕</li>
        <li>👤 Bob — Up for a walk 🚶</li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}