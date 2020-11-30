import banner from "../../images/bannerbig.png"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

function Carousel() {
  return (
    <div className="ccar">
      <div id="carouselExampleIndicators" className="carousel slide position-relative" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0">
              <span className="bottom_arr">5</span>
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
              <span className="bottom_arr">4</span>
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"className="active">
              <span className="bottom_arr">3</span>
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3">
          <span className="bottom_arr">2</span>
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4">
          <span className="bottom_arr">1</span>
          </li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item ced active">
            <img src={banner} className="img-Coarousl" alt="..." />
          </div>
          <div className="carousel-item ced">
            <img src={banner} className="img-Coarousl" alt="..." />
          </div>
          <div className="carousel-item ced">
            <img src={banner} className="img-Coarousl" alt="..." />
          </div>
          <div className="carousel-item ced">
            <img src={banner} className="img-Coarousl" alt="..." />
          </div>
          <div className="carousel-item ced">
            <img src={banner} className="img-Coarousl" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev a1" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true">
              <BsArrowLeftShort className="arroleft" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next a2" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true">
          <BsArrowRightShort className="arroright" />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
