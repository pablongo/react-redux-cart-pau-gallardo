import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section>
      <div>
        <h3>Crea tu cuenta</h3>
        <Link to="/">Entra si ya estas registrado</Link>
      </div>
      <form>
        <label htmlFor="name">
          Nombre
          <input
            id="name"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="surname">
          <input
            id="surname"
            name="surname"
            type="text"
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="text"
          />
        </label>
      </form>
    </section>
  );
}
