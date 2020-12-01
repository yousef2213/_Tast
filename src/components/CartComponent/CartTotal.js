import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QafeerContext } from "../../context/context";

function CartTotal() {
  const { Total, clearCart } = useContext(QafeerContext);
  if(Total === "0"){
    document.querySelector(".checkO").classList.add("d-none")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mx-auto text-center">
          <Link to="/Checkout">
            <button
              type="button"
              className="btn btn-outline-primary text-capitalize d-block text-center mx-auto my-3 checkO"
            >
              Checkout
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger text-capitalize"
            onClick={clearCart}
          >
            clear cart
          </button>
          <h3 className="my-4 text-capitalize">total : $ {Total}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
