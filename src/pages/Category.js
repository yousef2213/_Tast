import React, { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { Link } from "react-router-dom";
import { QafeerContext } from "../context/context";
import loading from "../images/loading.svg"
function Category() {
  const { setTest } = useContext(
    QafeerContext
  );
  const [Catergory, setCatergory] = useState([]);
  useEffect(() => {
    getCatergory();
  }, []);
  async function getCatergory() {
    let URL_CATEGORY =
      "https://qafeer.net/wp-json/bestgator/v1/listMainCats?per_page=10&page_num=1";
    let result = await fetch(URL_CATEGORY);
    let data = await result.json();
    setCatergory(data.cats_list);
  }
  if(Catergory.length === 0){
    return(
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
    )
  }
  return (
    <div className="container">
      <div className="row my-3 mx-0">
        <div className="col-12 py-5">
          <h3 className="font-main font-weight-bold text-muted text-center">Categorys</h3>
        </div>
        {Catergory.map(({ id, name, image }) => {
          return (
            <div key={id} className="col-12 col-md-2 my-2 text-right mx-0">
              <Link to="/SingleProduct" className="text-dark" onClick={() => setTest(id)} to={`/category/${name}`}>
                <div className="first">
                  <img src={image} className="imgProd" alt="img" />
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
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
