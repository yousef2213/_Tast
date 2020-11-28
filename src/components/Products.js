import React from "react";
import Productsdata from "../data/Productsdata";
import { BsFillStarFill } from "react-icons/bs";
function Products() {
  return (
    <div className="container">
      <div className="row bkws">
        {Productsdata.map(({ id, name, img, price }) => {
          return (
            <div key={id} className="col-12 col-md-2 my-2 text-right">
              <div className="first">
                <img src={img} className="imgProd" alt="img" />
                <div className="icons text-right">
                  <BsFillStarFill className="iconP text-muted" />
                  <BsFillStarFill className="iconP" />
                  <BsFillStarFill className="iconP" />
                  <BsFillStarFill className="iconP" />
                  <BsFillStarFill className="iconP" />
                </div>
                <h6 className="nameP">{name}</h6>
                <h6 className="priceP"> ${price} <span className="text-muted">$133 </span></h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

/* <div className="icons text-right">
<BsFillStarFill className="icon text-muted" />
<BsFillStarFill className="icon" />
<BsFillStarFill className="icon" />
<BsFillStarFill className="icon" />
<BsFillStarFill className="icon" />
</div> */
