import banner from "../../images/bannerbig.png"
import banne2r from "../../images/CALL TO ACTION.png"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

function Carousel() {
  return (
    <div className="ccar">

          {/* Start */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide banner position-relative"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions"data-slide-to="0" className="active">
                <span className="bottom_arr">1</span>
              </li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1">
                <span className="bottom_arr">2</span>
              </li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2">
                <span className="bottom_arr">3</span>
              </li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active position-relative">
                <img src={banner} className="img-Coarousl" alt="banner" />
              </div>
              <div className="carousel-item position-relative">
                <img src={banner} className="img-Coarousl" alt="banner" />
              </div>
              <div className="carousel-item position-relative">
                 <img src={banner} className="img-Coarousl" alt="banner" />
              </div>
            </div>
          </div>
          {/* End */}
    </div>
  );
}

export default Carousel;
