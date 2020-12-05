import React, { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { QafeerContext } from "../../context/context";
import loading from "../../images/loading.svg";

function Wishlistcontainer() {
  const { WishList = [], setSingleProduct, User } = useContext(QafeerContext);
  if (WishList.length === 0) {
    return (
      <div className="container mx-auto px-0 my-3">
        <div className="row mx-0 py-5">
          <div className="col-12 mx-auto">
            <h2 className="text-center">WishList</h2>
          </div>
          <div className="col-12 mx-auto text-center">
            <img src={loading} alt="loading" />
            <h2 className="text-uppercase text-orange text-center py-3">
              loading WishList ...
            </h2>
          </div>
        </div>
      </div>
    );
  }else  if (WishList.wishlist_data.length === 0) {
    return (
      <div className="container mx-auto px-0 my-3">
        <div className="row mx-0 py-5">
          <div className="col-12 mx-auto">
            <h2 className="text-center">WishList</h2>
          </div>
          <div className="col-12 mx-auto text-center">
            <h2 className="text-uppercase text-orange text-center py-3 font-main font-weight-bold py-5">
              WishList Empty
            </h2>
          </div>
        </div>
      </div>
    );
  }
  console.log(WishList.wishlist_data);
  return (
    <div className="container">
      <div className="row mx-0 py-5">
        <div className="col-12 mx-auto">
          <h2 className="text-center">WishList</h2>
        </div>
        {WishList.wishlist_data.map(({ id, name, image, price }) => {
          return (
            <div key={id} onClick={() => setSingleProduct(id)} className="col-12 col-md-2 my-2 text-right mx-0 py-3">
              <Link to="/SingleProduct" className="text-dark">
                <div className="first wishlist_item">
                  <BsFillStarFill className="wishlist_item_star" />
                  <img src={image} className="imgProd" alt="img" />
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h5 className="nameP font-main font-weight-bold">{name}</h5>
                  <h6 className="nameP font-main font-weight-bold">${price}</h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlistcontainer;
