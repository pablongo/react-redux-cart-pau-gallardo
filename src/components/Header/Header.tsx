import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img src="" alt="drinks-co" />
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/">Contacto</Link>
        <Link to="/">Nuestro Blog</Link>
      </nav>
    </header>
  );
}
