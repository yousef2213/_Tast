import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import "../style/Navbar.css";
import Logo from "../images/qafeer-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid fir">
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <div className="d-flex">
              <div className="logo">
                <h5 className="font-main text-right ml-auto">
                  <img src={Logo} className="qafeer_logo ml-auto" />
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
                  <FaRegUser className="icon_ icon_td" />
                </div>
                <div className="Heart_Div">
                  <AiOutlineHeart className="icon_" />
                  <span className="span33">33</span>
                </div>
                <div className=" Cart_Div">
                  <Link to="/Checkout" className="card_nav">
                    <BiCartAlt className="icon_" />
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
            <Link
                className="navbar-brand font-main Sections mr-0 my-0 py-2 d-flex justify-content-around"
                to="/"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <BsList /> <span>الأقسام</span>
              </Link>
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
