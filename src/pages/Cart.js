import React, { useEffect } from "react";
import CartComponent from "../components/CartComponent/CartComponent";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CartComponent />
    </div>
  );
}

export default Cart;
