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


// 

    // <div className="container mx-auto">
    //   <div className="row">
    //     <div className="col-12 col-md-10 mx-auto py-5">
    //       <h3 className="text-center font-main font-weight-bold py-3 text1tabel">
    //         شروط الانضمام
    //       </h3>
    //       <h5 className="text-center text-primary font-main font-weight-bold py-3 text2tabel">
    //         أولا: يوجد أشتراك شهري لفئة في أي بي و الذهبية و لها مميزاتها الخاصة
    //         لكل فئة موضح داخل الجدول
    //       </h5>
    //       {/*  */}
    //       <table className="table table-bordered rounded ">
    //         <tbody>
    //           <tr>
    //             <th className="text-center tdHead">الفئة</th>
    //             <th className="text-center tdHead">في أي بي </th>
    //             <th className="text-center tdHead">الذهبية</th>
    //             <th className="text-center tdHead">البرونزية</th>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem">
    //               نسبة الفئة لكل منتج تم بيعه
    //             </td>
    //             <td className="text-center tdItem">%7.5</td>
    //             <td className="text-center tdItem">%8.57</td>
    //             <td className="text-center tdItem">%10</td>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem2">نسبة نظام أفلييت</td>
    //             <td className="text-center tdItem2">%0.5</td>
    //             <td className="text-center tdItem2">%0.5</td>
    //             <td className="text-center tdItem2">%0.5</td>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem" scope="row">
    //               ترويج المنتجات
    //             </td>
    //             <td className="text-center tdItem checkAi">
    //               <AiOutlineCheck />
    //             </td>
    //             <td className="text-center tdItem checkAi">
    //               <AiOutlineCheck />
    //             </td>
    //             <td className="text-center tdItem checkAi">
    //               <AiOutlineClose />
    //             </td>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem2" scope="row">
    //               المنتجات في اول صفحة
    //             </td>
    //             <td className="text-center tdItem2 checkAi">
    //               <AiOutlineCheck />
    //             </td>
    //             <td className="text-center tdItem2 checkAi">
    //               <AiOutlineClose />
    //             </td>
    //             <td className="text-center tdItem2 checkAi">
    //               <AiOutlineClose />
    //             </td>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem" scope="row">
    //               لوحة الاعلانات
    //             </td>
    //             <td className="text-center tdItem"> مجاناً</td>
    //             <td className="text-center tdItem"> مجاناً</td>
    //             <td className="text-center tdItem"> 30 ريال أسبوعي</td>
    //           </tr>
    //           <tr>
    //             <td className="text-center tdItem2" scope="row">
    //               قيمة الاشتراك الشهري
    //             </td>
    //             <td className="text-center tdItem2">8 ريالات </td>
    //             <td className="text-center tdItem2">6 ريالات </td>
    //             <td className="text-center tdItem2">مجاناً </td>
    //           </tr>
    //           <tr className="border-0">
    //             <td className="text-center border-0" scope="row"></td>
    //             <td className="text-center border-0" scope="row">
    //               <button className=" btn-4trak">اشتراك</button>
    //             </td>
    //             <td className="text-center border-0" scope="row">
    //               <button className=" btn-4trak">اشتراك</button>
    //             </td>
    //             <td className="text-center border-0" scope="row">
    //               <button className=" btn-4trak">اشتراك</button>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>

    //       <ol>
    //         <li className="text-right orderlistitem">
    //           نسبة الفائدة لكل منتج تم بيعه : هي النسبة تخصم من كل منتج تم بيعه
    //           عن طريق المنصة قفير.
    //         </li>
    //         <li className="text-right orderlistitem">
    //           نظام أفلييت :تؤخذ نسبة من كل عملية بيع و تعطى للمروج الذي روج عن
    //           المنتج و يحق للتاجر بزيادة هذه النسبة.
    //         </li>
    //         <li className="text-right orderlistitem">
    //           ترويج المنتجات : سوف يتم ترويج المنتجات علي ستوري أنستجرام.
    //         </li>
    //         <li className="text-right orderlistitem">
    //           لوحة الأعلانات :سوف نعرض ل ثلاث لوحات أعلانية داخل المنصة و
    //           التطبيقات لمدة شهر لكل أعلان أسبوع, و الذهبية أعلانان لمدة شهر و
    //           كل أعلان أسبوع ,أما البرونزية الأعلان الواحد قيمته 30في الأسبوع.
    //         </li>
    //       </ol>
    //     </div>
    //   </div>
    // </div>
    // );