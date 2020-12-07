import React, { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { QafeerContext } from "../context/context";
import loading from "../images/loading.svg"
function CategoryById() {
  const { CategoryListId ,setCategoryById } = useContext(QafeerContext);
  if (CategoryListId.length === 0) {
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
    <div className="container mx-auto">
      <div className="row mx-0 px-0 py-4">
        {CategoryListId.map(({ id, name, image }) => {
          return (
            <div key={id} onClick={() => setCategoryById(id)} className="col-12 col-md-2 my-2 text-right mx-0">
              <Link to={`/categoryId/${id}`} className="text-dark">
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

export default CategoryById;
