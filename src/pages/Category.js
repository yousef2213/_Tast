import React, { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { QafeerContext } from "../context/context";
import loading from "../images/loading.svg";
import Productsdata from "../data/Productsdata";
function Category() {
  // const { setTest } = useContext(QafeerContext);
  const [Catergory, setCatergory] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getCatergory();
  }, []);
  async function getCatergory() {
    // let URL_CATEGORY ="https://qafeer.net/wp-json/bestgator/v1/listMainCats?per_page=10&page_num=1";
    // let result = await fetch(URL_CATEGORY);
    // let data = await result.json();
    // setCatergory(data.cats_list);
    setCatergory(Productsdata);
  }

  if (Catergory.length === 0) {
    return (
      <div className="container mx-auto px-0 my-3">
        <div className="row mx-0 py-5">
          <div className="col-12 mx-auto text-center">
            <img src={loading} alt="loading" />
            <h2 className="text-uppercase text-orange text-center py-3">
              loading Category ...
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row my-4 mx-0">
        {Catergory.map(({ id, name, img }) => {
          return (
            <div key={id} className="col-12 col-md-2 my-2 text-right mx-0">
              <Link
                to="/category"
                className="text-dark" // onClick={() => setTest(id)} to={`/category/${name}`}
              >
                <div className="first">
                  <div className="divimgProd">
                    <img src={img} className="imgProd" height="100%" alt="img" />
                  </div>
                  <div className="icons text-right py-2">
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP text-muted" />
                  </div>
                  <h6 className="nameP pb-2">{name}</h6>
                  <h3 className="namePrice">
                    $150 <span className="text-muted decoriton">$200</span>{" "}
                  </h3>
                  <span className="sale">50%-</span>
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
