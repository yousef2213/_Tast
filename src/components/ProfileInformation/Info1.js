import React from "react";
import emailIcon from "../../images/تسجيل الدخول/envelope (1).png";
import manuser from "../../images/تسجيل الدخول/man-user.png";
import phoneIcon from "../../images/تسجيل الدخول/phone-call.png";
import pinIcon from "../../images/تسجيل الدخول/pin (10).png";
import padlockIcon from "../../images/تسجيل الدخول/padlock (1).png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function Info1() {
  return (
    <div className="my-0">
      <form className="">
        <div className="my-3 emailicon">
          <label className="label">اسمك الكريم</label>
          <input type="text" className="input_order pr-5" />
          <img src={manuser} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">بريدك الالكتروني</label>
          <input type="text" className="input_order pr-5" />
          <img src={emailIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">رقم الهاتف</label>
          <input type="text" className="input_order pr-5" />
          <img src={phoneIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">العنوان </label>
          <input type="text" className="input_order pr-5" />
          <img src={pinIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">كلمة المرور </label>
          <input type="password" className="input_order pr-5" />
          <img src={padlockIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">تاكيد كلمة المرور </label>
          <input type="password" className="input_order pr-5" />
          <img src={padlockIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="text-right">
          <button className="input_order_btn_info ml-auto">
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}

export default Info1;
