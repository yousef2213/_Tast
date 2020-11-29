import Img from "../images/img1.png";
import Tgor from "../images/Section2/tg1.png";
import M31 from "../images/Section2/img2.png";
import M32 from "../images/Section2/img22.png";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

function Sec3() {
  return (
    <div className="container mx-auto">
      {/*  */}
      <div className="row my-5">
        <div className="col-12 col-md-6 d-flex">
          <div className="container-fluid mx-auto align-self-center">
            <div className="row mx-0">
              <div className="col-12 text-right">
                <h4 className="font-main font-weight-bold">اصحاب معرض جدد</h4>
                <h6 className="font-main font-weight-bold mt-2 mb-5">
                  التجار جدد
                </h6>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={Tgor} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                  <div className="div_section_2 text-center mt-3">
                    <FaInstagramSquare className="fa_Section" />
                    <AiFillFacebook className="fa_Section" />
                    <AiFillTwitterSquare className="fa_Section" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={Tgor} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                </div>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={Tgor} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <img src={Img} className="img-fluid" alt="Img" />
        </div>
      </div>

      {/*  */}

      <div className="row my-5">
        <div className="col-12 col-md-6 mt-3">
          <img src={M31} className="img-fluid" alt="Img" />
        </div>
        <div className="col-12 col-md-6 d-flex">
          <div className="container-fluid mx-auto align-self-center">
            <div className="row mx-0">
              <div className="col-12 text-right">
                <h4 className="font-main font-weight-bold">اصحاب معرض جدد</h4>
                <h6 className="font-main font-weight-bold mt-2 mb-5">
                  التجار جدد
                </h6>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={M32} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                  <div className="div_section_2 text-center mt-3">
                    <FaInstagramSquare className="fa_Section" />
                    <AiFillFacebook className="fa_Section" />
                    <AiFillTwitterSquare className="fa_Section" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={M32} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                </div>
              </div>
              <div className="col-12 col-md-4 left_sec2">
                <div className="Tg1_div">
                  <img src={M32} className="Tg1" alt="Togar" />
                  <h6 className="font-main font-weight-bold mt-2 text-right">
                    معرض 1
                  </h6>
                  <h4 className="font-main text-right">نص</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
