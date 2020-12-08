import ImgLast from "../../images/Section2/last.png";
import ImgLast2 from "../../images/Section2/last2.png";
import DataProducts from "../../data/ProductsLaptop";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
function LastHome() {
  const [last, setLast] = useState([]);
  useEffect(() => {
    setLast(DataProducts.filter((dat) => dat.id <= 3));
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="row mx-0">
        <div className="col-12 col-md-6 border_last">
          <div className="w-100">
            <img src={ImgLast2} className="img-fluid" alt="ImgLast" />
          </div>
          <div className="row mx-0 px-0 mt-5">
            {last.map(({ id, name, price, img }) => {
              return (
                <div key={id} className="col-12 col-md-4">
                  <div className="first">
                    <img src={img} className="imgProd" alt="img" />
                    <div className="icons text-right">
                      <BsFillStarFill className="iconP text-muted" />
                      <BsFillStarFill className="iconP" />
                      <BsFillStarFill className="iconP" />
                      <BsFillStarFill className="iconP" />
                      <BsFillStarFill className="iconP" />
                    </div>
                    <h6 className="nameP text-right">{name}</h6>
                    <h6 className="priceP text-right">
                      ${price} <span className="text-muted">$133 </span>
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-6 border_last">
          <div>
            <img src={ImgLast} className="img-fluid" alt="ImgLast" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastHome;
