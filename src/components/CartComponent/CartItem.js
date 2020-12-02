import React from 'react'
import {
    FaChevronCircleUp,
    FaChevronCircleDown
} from 'react-icons/fa'
import { RiCloseLine } from "react-icons/ri"
export default function CartItem({cartitem,Increment,decrement,removeItem}) {
    const {count,name,img,price,total,id} = cartitem;
    return (
        <div className="row text-center align-items-center my-3  mx-0">

            <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0">
                <img src={img} alt="product cart" className="img-fluid" width="150" />
            </div>

            <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0  font-main font-weight-bold">
                <span className="d-lg-none  font-main font-weight-bold"> المنتج : </span> {name}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0  font-main font-weight-bold">
                <span className="d-lg-none  font-main font-weight-bold"> السعر : </span> $ {price}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center align-items-center">
                <FaChevronCircleUp className="text-main cartitem" onClick={() => Increment(id)} />
                    <span className="mx-3  font-main font-weight-bold">{count}</span>
                    <FaChevronCircleDown className="text-main cartitem" onClick={() => decrement(id)} />
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0 font-main font-weight-bold">
                 الاجمالي :  $ {total}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <RiCloseLine className="cartitem remove text-danger" onClick={() => removeItem(id)}  />
            </div>
        </div>
    )
}
