import Carousel from "../components/HomeComponents/Carousel.js";
import Sec2 from "../components/HomeComponents/Sec2";
import "../App.css";
import Sec3 from "../components/HomeComponents/Sec3.js";
import Products from "../components/Products.js";
import LastHome from "../components/HomeComponents/LastHome.js";
import Hero from "../components/Hero";
import ProductsLaptop from "../data/ProductsLaptop";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row mx-0 mb-5 mt-3">
        <div className="col-12 carousel_home">
          <Carousel />
        </div>
      </div>
      <Sec2 />
      <Sec3 />
      <LastHome />
      <Hero />
      <div className="row mx-0 px-0 py-5">
        <div className="container">
          <div className="row mx-0 pb-3">
            <div className="col-12 text-right myproduct mx-0">
              <h4 className="font-main">منتجات مميزة</h4>
              <ul className="nav nav-tabs d-block d-md-flex" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link li active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" >
                  ساعات
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link li" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                     احذية للرجال
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link li" id="profile1-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile" aria-selected="false">
                     احذية للنساء
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link li" id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false">
                     ساعات
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link li" id="profile3-tab" data-toggle="tab" href="#profile3" role="tab" aria-controls="profile" aria-selected="false">
                     هواتف
                  </a>
                </li>
              </ul>
              <div className="tab-content py-3" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <Products />
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <Products />
                </div>
                <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile1-tab">
                  <Products />
                </div>
                <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile2-tab">
                  <Products />
                </div>
                <div className="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile3-tab">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Home;
