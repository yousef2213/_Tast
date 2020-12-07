import { BsCheck } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function CotainerCondetions() {
  return (
    <div className="container-fluid mx-auto">
      <div className="row mx-0 py-5 my-5">
        <div className="col-11 mx-auto text-center pb-5">
            <h1 className="font-main font-weight-bold">خطط الأسعار</h1>
            <h5 className="font-main font-weight-bold">خطط الاسعار خطط الاسعار</h5>
        </div>
        <div className="col-12 col-md-3 mx-auto px-0 my-2">
          <div className="py-2 Vip">
          <span className="leftPoation"></span>
            <h4 className="text-right pt-5 font-main font-weight-bold">
              في اي بي
            </h4>
            <h1 className="text-right color-main font-main font-weight-bold pb-4">
              8 ريالات
            </h1>
            <p className="colr text-right font-main font-weight-bold py-2">
              نسبة الفائدة لكل منتج تم بيعة 7.5
            </p>
            <p className="colr text-right font-main font-weight-bold py-2">
              5% نسبة نظام افلييت
            </p>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح الترويح للمنتجات
              </p>
              <p className=" font-main font-weight-bold">
                <BsCheck className="icon_check_condition" />
              </p>
            </div>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح ظهور الاعلانات في اول صفحة
              </p>
              <p className=" font-main font-weight-bold">
                <BsCheck className="icon_check_condition" />
              </p>
            </div>
            <p className="colr text-right font-main font-weight-bold pb-5">
              لوحة اعلانات مجانا
            </p>
            <div className="my-3">
              <input
                type="submit"
                className="input_order_btn font-main font-weight-bold"
                value="اشتراك"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto px-0 my-2">
          <div className="py-2 Vip">
          <span className="leftPoation"></span>
            <h4 className="text-right pt-5 font-main font-weight-bold">
              الذهبية
            </h4>
            <h1 className="text-right color-main font-main font-weight-bold pb-4">
              8 ريالات
            </h1>
            <p className="colr text-right font-main font-weight-bold py-2">
              نسبة الفائدة لكل منتج تم بيعة 7.5
            </p>
            <p className="colr text-right font-main font-weight-bold py-2">
              5% نسبة نظام افلييت
            </p>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح الترويح للمنتجات
              </p>
              <p className=" font-main font-weight-bold">
                <BsCheck className="icon_check_condition" />
              </p>
            </div>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح ظهور الاعلانات في اول صفحة
              </p>
              <p className=" font-main font-weight-bold">
                <IoMdClose className="icon_check_condition" />
              </p>
            </div>
            <p className="colr text-right font-main font-weight-bold pb-5">
              لوحة اعلانات مجانا
            </p>
            <div className="my-3">
              <input
                type="submit"
                className="input_order_btn font-main font-weight-bold"
                value="اشتراك"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto px-0 my-2">
          <div className="py-2 Vip">
          <span className="leftPoation"></span>
            <h4 className="text-right pt-5 font-main font-weight-bold">
              البرونزية
            </h4>
            <h1 className="text-right color-main font-main font-weight-bold pb-4">
              8 ريالات
            </h1>
            <p className="colr text-right font-main font-weight-bold py-2">
              نسبة الفائدة لكل منتج تم بيعة 7.5
            </p>
            <p className="colr text-right font-main font-weight-bold py-2">
              5% نسبة نظام افلييت
            </p>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح الترويح للمنتجات
              </p>
              <p className=" font-main font-weight-bold">
                <IoMdClose className="icon_check_condition" />
              </p>
            </div>
            <div className="d-flex justify-content-between text-right py-2">
              <p className="colr font-main font-weight-bold">
                متاح ظهور الاعلانات في اول صفحة
              </p>
              <p className=" font-main font-weight-bold">
                <IoMdClose className="icon_check_condition" />
              </p>
            </div>
            <p className="colr text-right font-main font-weight-bold pb-5">
              لوحة اعلانات مجانا
            </p>
            <div className="my-3">
              <input
                type="submit"
                className="input_order_btn font-main font-weight-bold"
                value="اشتراك"
              />
            </div>
          </div>
        </div></div>
    </div>
  );
}

export default CotainerCondetions;
