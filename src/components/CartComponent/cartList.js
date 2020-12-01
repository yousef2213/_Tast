import { useContext } from "react";
import { Link } from "react-router-dom";
import { QafeerContext } from "../../context/context.js";
import CartItem from "./CartItem";

const CartList = () => {
  const { Cart, removeItem, Increment, decrement } = useContext(QafeerContext);
  if (Cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-center text-title my-5 font-main font-weight-bold text-capitalize">
          your cart is currently empty
        </h1>
        <Link to="/">
          <button className="btn btn-outline-primary mx-auto">
            Return Home
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="conatiner-fluid">
      <div className="row  mx-0">
        <div className="col">
          {Cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                cartitem={item}
                Increment={Increment}
                decrement={decrement}
                removeItem={removeItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartList;
