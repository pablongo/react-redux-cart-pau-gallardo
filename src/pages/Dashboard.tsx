import React from 'react';

import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import Cupon from '../components/Cupon/Cupon';
import Login from '../components/Login/Login';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Cart />
      <OrderSummary />
      <Cupon />
      <Login />
    </>
  );
}
