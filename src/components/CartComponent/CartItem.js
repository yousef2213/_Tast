import React from "react";
import { GoPlusSmall } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
export default function CartItem({ cartitem, Increment, decrement, removeItem}) {
  const { count, name, img, price, total, id } = cartitem;
  return (
    <div className="row text-center align-items-center mx-0 bg_col">
      <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0">
        <div className="py-3">
          <RiCloseLine className="cartitem remove text-danger" onClick={() => removeItem(id)}
          />
          <img src={img} alt="product cart" className="img-fluid" width="150" />
        </div>
        <h6>{name}</h6>
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0  font-main font-weight-bold">
        <span className="d-lg-none font-main font-weight-bold"> السعر : </span>
        <span style={{ fontSize: "1.2rem" }}>$ {price || 22}</span>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-between align-items-center cart_increment">
          <GoPlusSmall
            className="text-main cartitem_plus"
            onClick={() => Increment(id)}
          />
          <span className="mx-3  font-main font-weight-bold">{count || 1}</span>
          <TiMinus
            className="text-main cartitem_minus"
            onClick={() => decrement(id)}
          />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0 font-main font-weight-bold">
        الاجمالي : $ {total || 1000}
      </div>
    </div>
  );
}
