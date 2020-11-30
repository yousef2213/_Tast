import Carousel from "../components/HomeComponents/Carousel.js";
import Sec2 from "../components/HomeComponents/Sec2";
import "../App.css";
import Sec3 from "../components/Sec3.js";
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
              <div className="btn_nav_product d-none d-md-block">
                <div className="nav">
                  <ul className="nav-bar  d-flex justify-content-between mr-0 pr-0 mt-4">
                    <div className="d-flex">
                      <li className="li font-main">ساعات</li>
                      <li className="li font-main">احذية للرجال</li>
                      <li className="li font-main">احذية للنساء</li>
                      <li className="li font-main"> ملابس</li>
                      <li className="li font-main"> هواتف</li>
                      <li className="li font-main"> كاميرات</li>
                      <li className="li cl font-main">لاب توب</li>
                      <li className="li font-main"> اجهزة تابلت</li>
                      <li className="li font-main">اخري</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products Products={ProductsLaptop} />
      </div>
    </div>
  );
}

export default Home;
