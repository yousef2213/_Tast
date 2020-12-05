import { AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import qafferr from "../images/القفير 2.png";
import qafferrHeart from "../images/heart.svg";
import userImg from "../images/User.svg";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { QafeerContext } from "../context/context";
import React from "react";
function Navbar() {
  const [Catergory, setCatergory] = useState([]);
  const { CartItem, WishList = [], Total, setTest,Login } = useContext(QafeerContext);
  useEffect(() => {
    getCatergory();
  }, []);

  async function getCatergory() {
    let URL_CATEGORY = "https://qafeer.net/wp-json/bestgator/v1/listMainCats?per_page=10&page_num=1";
    let result = await fetch(URL_CATEGORY);
    let data = await result.json();
    setCatergory(data.cats_list)
  }
  // var WishList_Count;
  // if(Login){
  //   if(WishList.length === 0){
  //     WishList_Count = 0
  //   }
  //   else{
  //     WishList_Count = WishList.wishlist_data.length
  //   }
  // }
  // else{
  //   WishList_Count = 0
  // }
  return (
    <>
      <div className="container mx-auto p-sm-0 p-md-2">
        <div className="row mx-0">
          <div className="col-12 px-0 d-flex justify-content-between">
            <div className="d-flex logo_nav">
              <Link to="/">
                <img src={Logo} className="img-fluid" alt="" />
                <span className="span_nav_logo">
                  لعرض منتجات التجار والمعارض
                </span>
              </Link>
            </div>
            {/*  */}
            <div className="input_navbar d-none d-md-block">
              <input
                type="text"
                placeholder="ابحث هنا"
                className="input_Search_navbar"
              />
              <AiOutlineSearch className="icon_Search" />
            </div>
            {/*  */}
            <div className="icons_navbar">
              <Link to="/حسابي" className="card_nav">
                <img src={userImg} className="icon_" alt="qafferr" />
              </Link>
              <div className="Heart_Div">
                <Link to="/WishList" className="card_nav cp">
                  <img src={qafferrHeart} className="icon_" alt="qafferr" />
                  <span className="span33">0</span>
                </Link>
              </div>
              <div className=" Cart_Div">
                <Link to="/Cart" className="card_nav">
                  <img src={qafferr} className="icon_" alt="qafferr" />
                  <span className="spancart"> {CartItem} </span>
                </Link>
              </div>
              <div>
                <h6 className="font-main mb-0">القفير</h6>
                <p className="font-main text-righ mb-0">${Total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0 px-0 fir">
        <div className="row mx-0">
          <div className="col-12 col-md-11 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light Nav">
              <h5
                className="navbar-brand font-main Sections mr-0 my-0 py-2 C_p awl"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <BsList className="listicon text-white" />
              </h5>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <div className="input_navbar w-100 mr-0 d-md-none my-2">
                    <input
                      type="text"
                      placeholder="ابحث هنا"
                      className="input_Search_navbar"
                    />
                    <AiOutlineSearch className="icon_Search_small" />
                  </div>
                  <li className="nav-item">
                    <Link
                      className="nav-link nav_link_color text-center"
                      to="/"
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link nav_link_color text-center"
                      to="/التجار"
                    >
                      التجار
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      الاقسام
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {Catergory.map(({ id, name }) => {
                        return (
                          <React.Fragment key={id}>
                            <Link className="dropdown-item" onClick={() => setTest(id)} to={`/category/${name}`}>
                              {name}
                            </Link>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link nav_link_color text-center"
                      to="/category"
                    >
                      المعارض
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link nav_link_color text-center"
                      to="/category"
                    >
                      الصفحات العاجلة
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link nav_link_color text-center"
                      to="/ProfileInformation"
                    >
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
