import banner from "../../images/bannerbig.png"
import banner2 from "../../images/bannerbig2.png"
import banner3 from "../../images/bannerbig3.png"

function Carousel() {
  return (
    <div className="ccar">

          {/* Start */}
          <div id="carouselExampleCaptions" className="carousel slide banner position-relative" data-ride="carousel">
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
                <img src={banner2} className="img-Coarousl" alt="banner" />
              </div>
              <div className="carousel-item position-relative">
                 <img src={banner3} className="img-Coarousl" alt="banner" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          {/* End */}
    </div>
  );
}

export default Carousel;
