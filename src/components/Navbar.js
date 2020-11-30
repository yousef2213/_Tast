import { AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import qafferr from "../images/القفير 2.png"
import qafferrHeart from "../images/heart.svg"
import userImg from "../images/User.svg"
import Logo from "../images/qafeer-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid fir">
      <div className="container">
        <div className="row">
          <div className="col-12 py-3 px-0">
            <div className="d-flex">
              <div className="logo">
                <h5 className="font-main text-right ml-auto">
                  <img src={Logo} className="qafeer_logo ml-auto" alt="" />
                </h5>
              </div>
              <div className="input d-none d-md-block">
                <input
                  type="text"
                  placeholder="ابحث هنا"
                  className="input_Search"
                />
                <AiOutlineSearch className="icon_Search" />
              </div>
              <div className="icons_navbar">
                <div>
                  <img src={userImg} className="icon_" alt="qafferr" />
                </div>
                <div className="Heart_Div">
                  <img src={qafferrHeart} className="icon_" alt="qafferr" />
                  <span className="span33">33</span>
                </div>
                <div className=" Cart_Div">
                  <Link to="/Checkout" className="card_nav">
                    <img src={qafferr} className="icon_" alt="qafferr" />
                    <span className="spancart">0</span>
                  </Link>
                </div>
                <div>
                  <h6 className="font-main mb-0">القفير</h6>
                  <p className="font-main text-righ mb-0">$0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light Nav">
            <h5
                className="navbar-brand font-main Sections mr-0 my-0 py-2 d-flex justify-content-around C_p awl"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <BsList className="listicon" /> <span className="aksam">الأقسام</span>
              </h5>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link text-center" to="/">
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-center" to="/Merchants">
                      التجار
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-center" to="/">
                      المعارض
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-center" to="/">
                      الصفحات العاجلة
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-center" to="/">
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
