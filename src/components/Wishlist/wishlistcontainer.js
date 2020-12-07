import React, { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { GoPlusSmall } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { QafeerContext } from "../../context/context";
import loading from "../../images/loading.svg";

function Wishlistcontainer() {
  const { WishList = [], removeToWishlist } = useContext(QafeerContext);
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
  } else if (WishList.length === 0) {
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
  return (
    <>
      <Colum />
      <Testing dat={WishList} />
    </>
    // <div className="container">
    //   <div className="row mx-0 py-5">
    //     <div className="col-12 mx-auto">
    //       <h2 className="text-center">WishList</h2>
    //     </div>
    //     {WishList.wishlist_data.map(
    //       ({ id, name, image, price, wishlist_item_id }) => {
    //         return (
    //           <div
    //             key={id}
    //             className="col-12 col-md-2 my-2 text-right mx-0 py-3 wishlist_item"
    //           >
    //             <BsFillStarFill
    //               className="wishlist_item_star"
    //               onClick={() => removeToWishlist(wishlist_item_id)}
    //             />
    //             <Link to={`/product/${id}`} className="text-dark">
    //               <div className="first">
    //                 <img src={image} className="imgProd" alt="img" />
    //                 <div className="icons text-right">
    //                   <BsFillStarFill className="iconP text-muted" />
    //                   <BsFillStarFill className="iconP" />
    //                   <BsFillStarFill className="iconP" />
    //                   <BsFillStarFill className="iconP" />
    //                   <BsFillStarFill className="iconP" />
    //                 </div>
    //                 <h5 className="nameP font-main font-weight-bold">{name}</h5>
    //                 <h6 className="nameP font-main font-weight-bold">
    //                   ${price}
    //                 </h6>
    //               </div>
    //             </Link>
    //           </div>
    //         );
    //       }
    //     )}
    //   </div>
    // </div>
  );
}

export default Wishlistcontainer;

function Testing({ dat = [] }) {
  const { removeToWishlist,addToCart } = useContext(QafeerContext);
  return (
    <div className="conatiner">
      <div className="row mx-0">
        <div className="col">
          {dat.map(
            ({ id, price, image, images, name, wishlist_item_id }) => {
              return (
                <div key={id} className="row text-center align-items-center mx-0 bg_col py-2">
                  <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0">
                    <div>
                      <RiCloseLine className="cartitem remove text-danger" onClick={() => removeToWishlist(wishlist_item_id)} />
                      <img src={image || images[0]} alt="product cart" className="img-fluid" width="150" style={{ border: "1px solid #ddd" }} />
                    </div>
                  </div>
                  <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0 text-right">
                    <h6>{name}</h6>
                  </div>
                  <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0  font-main font-weight-bold">
                    <span className="d-lg-none font-main font-weight-bold">
                      السعر :
                    </span>
                    <span style={{ fontSize: "1.2rem" }}>$ {price || 22}</span>
                  </div>

                  <div className="col-10 mx-auto col-lg-2">
                    <div className="btnIn px-2">
                      <button className="d-block w-100 btnadd mb-0 py-2 px-2" onClick={() => addToCart(id)}>
                        اضافة لمشتريات القفير
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

function Colum() {
  return (
    <div className="container-fluid d-none d-lg-block text-center mt-5">
      <div className="row mx-0 row_bg">
        <div className="col-lg-3">
          <h5 className="text-uppercase">المنتج</h5>
        </div>
        {/* price */}
        <div className="col-lg-9">
          <h5 className="text-uppercase">السعر</h5>
        </div>
      </div>
    </div>
  );
}
