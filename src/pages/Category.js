import React, { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { QafeerContext } from "../context/context";

function Category() {
  const { AllProducts, addToCart, setSingleProduct } = useContext(
    QafeerContext
  );
  useEffect(() => {
    const data = axios.get(
      "https://wardi.me/wp-json/bestgator/v1/getSingleProduct?product_id=22241"
    );
  }, []);
  const ShowMore = () => {
    document.querySelector("#more").classList.remove("d-none")
  }
  return (
    <div className="container">
      <div className="row bkws">
        <div className="col-12 text-right my-3">
          <div className="form-group">
            <select
              className="form-control select"
              id="exampleFormControlSelect1"
            >
              <option>ترتيب بواسطة تجار الدرجة الاولي</option>
              <option>ترتيب بواسطة تجار الدرجة الاولي</option>
              <option>ترتيب بواسطة تجار الدرجة الاولي</option>
            </select>
          </div>
        </div>
        {AllProducts.map(({ id, name, img, price }) => {
          return (
            <div
              key={id}
              onClick={() => setSingleProduct(id)}
              className="col-12 col-md-2 my-2 text-right"
            >
              <Link to="/SingleProduct" className="text-dark">
                <div className="first allPrducts">
                  <img src={img} className="imgProd" alt="img" />
                  <span className="spancatgory">50%-</span>
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
                  <h6 className="priceP">
                   <span className="text-muted">$133 </span> ${price}
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
        {AllProducts.map(({ id, name, img, price }) => {
          return (
            <div
              key={id}
              onClick={() => setSingleProduct(id)}
              className="col-12 col-md-2 my-2 text-right"
            >
              <Link to="/SingleProduct" className="text-dark">
                <div className="first allPrducts">
                  <img src={img} className="imgProd" alt="img" />
                  <span className="spancatgory">50%-</span>
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
                  <h6 className="priceP">
                    ${price} <span className="text-muted">$133 </span>
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
                {AllProducts.map(({ id, name, img, price }) => {
          return (
            <div
              key={id}
              onClick={() => setSingleProduct(id)}
              id="more"
              className="col-12 col-md-2 my-2 text-right d-none"
            >
              <Link to="/SingleProduct" className="text-dark">
                <div className="first allPrducts">
                  <img src={img} className="imgProd" alt="img" />
                  <span className="spancatgory">50%-</span>
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
                  <h6 className="priceP">
                    ${price} <span className="text-muted">$133 </span>
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="col-12">
          <button className="font-main btn_more" onClick={ShowMore}>
            <AiOutlineRedo className="ml-2" /> عرض المزيد
          </button>
        </div>


        <div className="col-12 text-right py-5">
          <h3 className="font-main font-weight-bold text-muted">شاهدت مؤخرا</h3>
        </div>
        {AllProducts.map(({ id, name, img, price }) => {
          return (
            <div
              key={id}
              onClick={() => setSingleProduct(id)}
              className="col-12 col-md-2 my-2 text-right"
            >
              <Link to="/SingleProduct" className="text-dark">
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
                  <h6 className="priceP">
                    ${price} <span className="text-muted">$133 </span>
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
