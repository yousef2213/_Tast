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
import Discove from "../images/pay/discover.ong.png";
function Footer() {
  return (
    <div className="container-fluid footer pt-3 mx-0">
      <div className="row mx-auto pt-3 px-3 pt-3">
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
          <div className="mt-2">
            <BsWifi className="fa-footer" />
            <AiFillYoutube className="fa-footer" />
            <AiOutlineTwitter className="fa-footer" />
            <FaFacebookF className="fa-footer" />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <a className="afooter" href="/">
                حسابي
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                الملف الشخصي
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                سلة المشتريات
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                المفضلة
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/SingleProduct">
                طلباتي
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <a className="afooter" href="/">
                روابط سريعة
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                الاشتراكات
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                تسجيل الدخول
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                الرثيسية
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/Merchants">
                التجار
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                المنتجات
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <a className="afooter" href="/">
                المعلومات والخصوصية
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                سياسة الخصوصية
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                خصوصية التجار
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                خصوصية المعارض
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                سياسة الاسترجاع
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                سياسة الدفع
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-2">
          <ul className="text-right" style={{ listStyle: "none" }}>
            <li className="d-inline-block py-2">
              <a className="afooter" href="/">
                اتصل بنا
              </a>
            </li>
            <li className="pb-2">
              <a className="afooter" href="/">
                01234456789
              </a>
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
