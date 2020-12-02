import image_1 from "../../images/Image-1.png";
import image_2 from "../../images/Image-2.png";
import image_3 from "../../images/Image-3.png";
import Img from "../../images/img1.png";
import M31 from "../../images/Section2/img2.png";
import M32 from "../../images/Section2/img22.png";
function Sec3() {
  return (
    <div className="container mx-auto">
      <div className="row mx-0 px-0 py-1 pt-5">
        <div className="col-12 col-md-6 h-100">
          <div className="img_number_one w-100 h-100">
            <div className="text_number_one py-4">
              <h2 className="text-right font-main">اصحاب معرض جدد</h2>
              <h5 className="text-right font-main">التجار الجدد</h5>
            </div>
            <div className="img_number_one_one d-flex my-1 my-md-5">
              <div className="mx-2">
                <img src={image_1} className="img-fluid" width="200" height="200" alt="one" />
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 1
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الاولي
                  </h6>
                </div>
              </div>
              <div className="mx-2">
                <div>
                  <img src={image_2} className="img-fluid" width="200" height="200" alt="one" />
                </div>
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 2
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الثانية
                  </h6>
                </div>
              </div>
              <div className="mx-2">
                <img src={image_3} className="img-fluid" width="200" height="200"  alt="one" />
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 3
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الثالثة
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="img_number_one w-100 h-100">
            <div className="img_number_one_one d-flex">
              <div className="">
                <img src={Img} className="img-fluid" alt="one" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="row mx-0 px-0 pt-5">
        <div className="col-12 col-md-6">
          <div className="img_number_one w-100 h-100">
            <div className="img_number_one_one d-flex">
              <div className="">
                <img src={M31} className="img-fluid" alt="one" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 h-100">
          <div className="img_number_one w-100 h-100">
            <div className="text_number_one py-4">
              <h2 className="text-right font-main font-weight-bold">
                اصحاب معرض جدد
              </h2>
              <h5 className="text-right font-main font-weight-bold">
                التجار الجدد
              </h5>
            </div>
            <div className="img_number_one_one d-flex my-1 my-md-5">
              <div className="mx-2 position-relative">
                <img src={M32} className="img-fluid"  width="200" height="200" alt="one" />
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 1
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الاولي
                  </h6>
                </div>
              </div>
              <div className="mx-2">
                <img src={M32} className="img-fluid"  width="200" height="200" alt="one" />
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 2
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الثانية
                  </h6>
                </div>
              </div>
              <div className="mx-2">
                <img src={M32} className="img-fluid"  width="200" height="200" alt="one" />
                <div className="py-3 mt-3">
                  <h6 className="text-right font-main font-weight-bold m3rd1">
                    معرض 3
                  </h6>
                  <h6 className="text-right font-main font-weight-bold m3rd2">
                    معرض الدرجة الثالثة
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Sec3;
