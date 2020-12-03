import React, { useContext } from "react";
import emailIcon from "../../images/تسجيل الدخول/envelope (1).png";
import phoneIcon from "../../images/تسجيل الدخول/phone-call.png";
import pinIcon from "../../images/تسجيل الدخول/pin (10).png";
import padlockIcon from "../../images/تسجيل الدخول/padlock (1).png";


import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { QafeerContext } from "../../context/context";

function SigninCol2() {
  const { getSubscription } = useContext(QafeerContext)
  return (
    <div className="my-4">
      <h4 className="text-right font-main font-weight-bold pb-3">الاشتراك</h4>
      <form className="">
        <div className="my-3">
          <label className="label">اسمك الكريم</label>
          <input type="text" className="input_order" id="nameSubscription" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">بريدك الالكتروني</label>
          <input type="email" className="input_order pr-5" id="emailSubscription" />
          <img src={emailIcon} className="icon_email" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">رقم الهاتف</label>
          <input type="number" className="input_order pr-5" id="numberSubscription" />
          <img src={phoneIcon} className="icon_email" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">العنوان </label>
          <input type="text" className="input_order pr-5" id="addressSubscription" />
          <img src={pinIcon} className="icon_email" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">كلمة المرور </label>
          <input type="password" className="input_order pr-5" id="passSubscription" />
          <img src={padlockIcon} className="icon_email" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">تاكيد كلمة المرور </label>
          <input type="password" className="input_order pr-5" id="passconfirmSubscription" />
          <img src={padlockIcon} className="icon_email" alt="emailIcon" />
        </div>
        <div className="text-right">
          <button className="input_order_btn my-0 font-main d-inline-block w-25 text-center ml-autopx-5" onClick={getSubscription}>
            اشتراك
          </button>
        </div>
        <h4 className="font-main text-right py-3">او بواسطة</h4>
        <div className="text-right w-100">
          <AiFillFacebook className="icon_sign" />
          <FaInstagramSquare className="icon_sign" />
          <FaTwitterSquare className="icon_sign" />
        </div>
      </form>
    </div>
  );
}

export default SigninCol2;
