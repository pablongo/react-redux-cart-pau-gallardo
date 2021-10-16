import React from 'react';

export default function OrderSummary() {
  return (
    <section>
      <h3>Resumen del pedido</h3>
      <span>Total de productos IVA incluido</span>
      <span>Total del envío imp.exct</span>
      <span>Total sin IVA</span>
      <span>Total de impuestos</span>
      <hr />
      <span>Total a pagar</span>
    </section>
  );
}
