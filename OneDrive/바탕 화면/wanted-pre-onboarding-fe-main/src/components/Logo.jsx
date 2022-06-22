import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="Logo">
      <img src="../assets/Logo.png" alt="Logo" />
    </Link>
  );
}
