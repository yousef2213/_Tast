import axios from "axios";
import React from "react";
import { useState } from "react";
import $ from "jquery";
function Form() {
  const [name, setState] = useState("");

  const Handel = () => {
    axios
      .post("https://wardi.me/wp-json/bestgator/v1/sendJson", name)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  $(document).ready(function () {
    // jQuery code

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on("click", ".dropdown-menu", function (e) {
      e.stopPropagation();
    });

    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
      $(".dropdown-menu a").click(function (e) {
        e.preventDefault();
        if ($(this).next(".submenu").length) {
          $(this).next(".submenu").toggle();
        }
        $(".dropdown").on("hide.bs.dropdown", function () {
          $(this).find(".submenu").hide();
        });
      });
    }
  });

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">
                Dropdown right
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a className="dropdown-item dropdown-toggle" href="#">
                    Dropdown item 3
                  </a>
                  <ul className="submenu submenu-left dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 4
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <section className="section-content py-5">
        <h6>Demo view: Bootstrap multilevel dropdown menu </h6>
        <p>
          For this demo page you should connect to the internet to receive files
          from CDN like Bootstrap CSS, Bootstrap JS and jQuery.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a
          href="http://bootstrap-menu.com/multilevel.html"
          className="btn btn-warning"
        >
          Back to tutorial or Download code
        </a>
      </section>
    </div>
  );
}

export default Form;
