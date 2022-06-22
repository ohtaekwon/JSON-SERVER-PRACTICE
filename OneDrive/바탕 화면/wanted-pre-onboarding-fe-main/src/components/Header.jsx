import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Gnb from './Gnb';
import Logo from './Logo';
// CSS
import './Header.css';
import Container from './Container';

export default function Header() {
  return (
    <header>
      <Gnb className="Gnb" />
    </header>
  );
}
