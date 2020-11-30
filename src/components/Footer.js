import "../style/footer.css";
import { FiSend } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsWifi } from "react-icons/bs";
import Visa from "../images/pay/visa.png";
import MestarCard from "../images/pay/mastercard.png";
import Paypal from "../images/pay/paypal.png";
import Maestro from "../images/pay/maestro.png";
import CardBanek from "../images/pay/cardBank.png";
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
            <li className="d-inline-block py-2">
              <Link className="afooter" to="/">
                حسابي
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                الملف الشخصي
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                سلة المشتريات
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                المفضلة
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/SingleProduct">
                طلباتي
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <Link className="afooter" to="/">
                روابط سريعة
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
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
                الرثيسية
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/Merchants">
                التجار
              </Link>
            </li>
            <li className="pb-2">
              <Link className="afooter" to="/">
                المنتجات
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <Link className="afooter" to="/">
                المعلومات والخصوصية
              </Link>
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
            <li className="d-inline-block py-2">
              <Link className="afooter" to="/">
                اتصل بنا
              </Link>
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
        <div className="col-12 d-flex justify-content-between py-2">
          <div>
            <div className="text-right">
              <img src={Visa} className="visa" alt="Visa" />
              <img src={MestarCard} className="visa" alt="Visa" />
              <img src={Paypal} className="visa" alt="Visa" />
              <img src={Maestro} className="visa" alt="Visa" />
              <img src={Discove} className="visa" alt="Visa" />
              <img src={CardBanek} className="visa" alt="Visa" />
            </div>
          </div>
          <h6 className="all">جميع الحقوق محفوظة</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
