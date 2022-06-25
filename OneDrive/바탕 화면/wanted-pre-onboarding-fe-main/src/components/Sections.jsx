import React from 'react';

import './Sections.css';
export default function Sections({ props, children }) {
  return <section className="sections-wrapper">{children}</section>;
}
