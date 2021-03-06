import "../style/footer.css";
import { FiSend } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsWifi } from "react-icons/bs";
import Visa from "../images/pay/visa.png";
import MestarCard from "../images/pay/mastercard.png";
import Paypal from "../images/pay/paypal.png";
import Maestro from "../images/pay/maestro.png";
import Discove from "../images/pay/discover.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid footer pt-3 mx-0">
      <div className="row mx-auto pt-3 px-3 py-5">
        <div className="col-12 col-md-4 p-3 text-right">
          <h6 className="font-main">اشترك لمتابعتنا</h6>
          <p className="font-main">
            افضل الاسعار علي منتجات الاحذية اسعار تبدا من 200$
          </p>
          <div className="input_footer">
            <input
              type="text"
              placeholder="بريدك الالكتروني"
              className="input_SearchFooter"
            />
            <div>
              <FiSend className="icon_Search_Footer" />
            </div>
          </div>
          <div className="mt-4">
            <BsWifi className="fa-footer" />
            <AiFillYoutube className="fa-footer" />
            <AiOutlineTwitter className="fa-footer" />
            <FaFacebookF className="fa-footer" />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2 font-main font-weight-bold">
                حسابي
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/حسابي">
                الملف الشخصي
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/Cart">
                سلة المشتريات
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/WishList">
                المفضلة
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/Checkout">
                طلباتي
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2 font-main font-weight-bold">
                روابط سريعة
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/الاشتراك">
                الاشتراكات
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                تسجيل الدخول
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/التجار">
                التجار
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/category">
                المنتجات
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2 font-main font-weight-bold">
                المعلومات والخصوصية
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                سياسة الخصوصية
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                خصوصية التجار
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                خصوصية المعارض
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                سياسة الاسترجاع
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                سياسة الدفع
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2 font-main font-weight-bold">
                اتصل بنا
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                01234456789
              </Link>
            </li>
            <li className="pb-2 afooter">technical@support.com</li>
          </ul>
        </div>
      </div>
      <div className="row px-5 footer_footer">
        <div className="col-12 d-sm-block d-md-flex justify-content-between text-center py-2">
          <div className="m-sm-auto m-md-0">
            <div className="text-right">
              <img src={Visa} className="visa" alt="Visa" />
              <img src={MestarCard} className="visa" alt="Visa" />
              <img src={Paypal} className="visa" alt="Visa" />
              <img src={Maestro} className="visa" alt="Visa" />
              <img src={Discove} className="visa" alt="Visa" />
            </div>
          </div>
          <div>
            <hr className="bg-white d-block d-md-none" />
            <h6 className="all font-main">جميع الحقوق محفوظة</h6>
            <h6 className="all font-main">تصميم و برمجة  <a href="https://best-gator.com/" target="_blank">بيست جيتور</a></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
