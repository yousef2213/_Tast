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
  const { CartItems, wishlist_data_items, Total, setTest, setCategoryById, Login} = useContext(QafeerContext);
  useEffect(() => {
      getCatergory();
  }, [Catergory]);

  async function getCatergory() {
    let URL_CATEGORY = "https://qafeer.net/wp-json/bestgator/v1/listMainCats?per_page=10&page_num=1";
    let result = await fetch(URL_CATEGORY);
    let data = await result.json();
    setCatergory(data.cats_list);
  }
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
                  <span className="span33">{wishlist_data_items}</span>
                </Link>
              </div>
              <div className=" Cart_Div">
                <Link to="/Cart" className="card_nav">
                  <img src={qafferr} className="icon_" alt="qafferr" />
                  <span className="spancart"> {CartItems} </span>
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
              <h5 className="navbar-brand font-main Sections mr-0 my-0 py-0 C_p awl d-flex" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <BsList className="listicon text-white text-right ml-auto mr-2 d-block d-md-none my-2" />
                <li className="nav-item navlink_dropdown dropdown d-none d-md-block">
                  <a className="nav-link navlink_dropdown_a dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <BsList className="listicon text-white" />
                    الاقسام
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" to="/" onClick={() => setTest(44)} to={`/category/${"Accessories"}`}>
                          Accessories
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/55`} onClick={() => setCategoryById(55)}>
                                  Cases
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(58)}>
                                 Chargers
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(72)}>
                                Headphone Accessories
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(73)}>
                                Headphone Cases
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(100)}>
                                Headphones
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(105)}>
                                Power Banks
                                </Link>
                              </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(53)} to={`/category/${"Cameras &amp; Photography"}`}>
                          Cameras &amp; Photography
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/55`} onClick={() => setCategoryById(159)}>
                                Cameras
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(102)}>
                                Photo Cameras
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(103)}>
                                Photo Cameras
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(136)}>
                                Video Cameras
                                </Link>
                              </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(54)} to={`/category/${"Car Electronic &amp; GPS"}`}>
                          Car Electronic &amp; GPS
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(59)} to={`/category/${"Computer Components"}`}>
                          Computer Components
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/55`} onClick={() => setCategoryById(163)}>
                                  Computer Cases
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(61)}>
                                  Desktops
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(93)}>
                                  Monitors
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/58`} onClick={() => setCategoryById(122)}>
                                  Software
                                </Link>
                              </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(62)} to={`/category/${"Ending Offers"}`}>
                          Ending Offers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(64)} to={`/category/${"Gadgets"}`}>
                          Gadgets
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/65`} onClick={() => setCategoryById(65)}>
                                  Gadgets &amp; Accesories
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/120`} onClick={() => setCategoryById(120)}>
                                  Smartwatches
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/140`} onClick={() => setCategoryById(140)}>
                                  Wearables
                                </Link>
                              </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(66)} to={`/category/${"Gadgets &amp; Accesories"}`}>
                          Gadgets &amp; Accesories
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(70)} to={`/category/${"GPS &amp; Navi"}`}>
                          GPS &amp; Navi
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/65`} onClick={() => setCategoryById(65)}>
                                  Gadgets &amp; Accesories
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/120`} onClick={() => setCategoryById(120)}>
                                  Smartwatches
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/140`} onClick={() => setCategoryById(140)}>
                                  Wearables
                                </Link>
                              </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(75)} to={`/category/${"Home Entertainment"}`}>
                          Home Entertainment
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/157`} onClick={() => setCategoryById(157)}>
                                  Blue-ray Players
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/171`} onClick={() => setCategoryById(171)}>
                                  DVD Players
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/178`} onClick={() => setCategoryById(178)}>
                                  Home &amp; Audio Enternteinment
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/179`} onClick={() => setCategoryById(179)}>
                                  Home &amp; Audio Enternteinment
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/76`} onClick={() => setCategoryById(76)}>
                                Home Theatres
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/108`} onClick={() => setCategoryById(108)}>
                                Projectors
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/126`} onClick={() => setCategoryById(126)}>
                                Speakers
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/133`} onClick={() => setCategoryById(133)}>
                                TVs
                                </Link>
                              </li>
                        </ul>
                      </li>

                      <li>
                        <Link className="dropdown-item dropdown-toggle navlink_dropdown_a_2" onClick={() => setTest(81)} to={`/category/${"Laptops &amp; Computers"}`}>
                        Laptops &amp; Computers
                        </Link>
                        <ul className="submenu submenu-left dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/150`} onClick={() => setCategoryById(150)}>
                                  Accessories
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/154`} onClick={() => setCategoryById(154)}>
                                  All in One
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/162`} onClick={() => setCategoryById(162)}>
                                  Computer Accessories
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/164`} onClick={() => setCategoryById(164)}>
                                  Computer Monitors
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/165`} onClick={() => setCategoryById(165)}>
                                  Computers
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/168`} onClick={() => setCategoryById(168)}>
                                Desktop Monitors
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/169`} onClick={() => setCategoryById(169)}>
                                  Desktop PCs &amp; Laptops
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/170`} onClick={() => setCategoryById(170)}>
                                  Desktop PCs &amp; Laptops
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/176`} onClick={() => setCategoryById(176)}>
                                  Gaming
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to={`/categoryId/180`} onClick={() => setCategoryById(180)}>
                                Laptops
                                </Link>
                              </li>
                        </ul>
                      </li>

                    {/* List Get Api */}
                    <div className="d-none">
                      {Catergory.map(({ id, name }) => {
                        return (
                          <React.Fragment key={id}>
                            <Link
                              className="dropdown-item"
                              onClick={() => setTest(id)}
                              to={`/category/${name}`}
                            >
                              {name}
                            </Link>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </li>
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
                    <Link className="nav-link nav_link_color text-center" to="/" >
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_link_color text-center" to="/التجار">
                      التجار
                    </Link>
                  </li>
                  <li className="nav-item navlink_dropdown dropdown d-block d-md-none">
                    <Link className="nav-link dropdown-toggle navlink_dropdown_dark" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      الاقسام
                    </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* List Get Api */}
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
                    <Link className="nav-link nav_link_color text-center" to="/المعارض">
                      المعارض
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_link_color text-center" to="/category">
                      الصفحات العاجلة
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_link_color text-center" to="/contactus">
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
