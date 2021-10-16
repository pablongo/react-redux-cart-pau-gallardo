import React from 'react';

export default function Cupon() {
  return (
    <section>
      <label htmlFor="cupon-input">
        Algun cupon descuento?
        <input
          id="cupon-input"
          name="cupon-input"
          type="text"
        />
      </label>
    </section>
  );
}
