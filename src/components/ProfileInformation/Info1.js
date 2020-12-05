import React, { useContext } from "react";
import emailIcon from "../../images/تسجيل الدخول/envelope (1).png";
import manuser from "../../images/تسجيل الدخول/man-user.png";
import phoneIcon from "../../images/تسجيل الدخول/phone-call.png";
import pinIcon from "../../images/تسجيل الدخول/pin (10).png";
import padlockIcon from "../../images/تسجيل الدخول/padlock (1).png";
import { QafeerContext } from "../../context/context";

function Info1() {
  const { SaveEditInformation,messSaveEdit } = useContext(QafeerContext);
  return (
    <div className="my-0">
      <form className="bgw_order">
        <div className="my-3 emailicon">
          <label className="label">اسمك الكريم</label>
          <input type="text" name="name" className="input_order pr-5" id="nameEdet" />
          <img src={manuser} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">بريدك الالكتروني</label>
          <input type="email" name="email" id="emailEdit" className="input_order pr-5"  />
          <img src={emailIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">رقم الهاتف</label>
          <input type="number" name="number" id="numberEdet" className="input_order pr-5" />
          <img src={phoneIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        {/* <div className="my-3 emailicon">
          <label className="label">العنوان </label>
          <input type="text" name="address" id="addressEdit" className="input_order pr-5"  />
          <img src={pinIcon} className="icon_email_info" alt="emailIcon" />
        </div> */}
        <div className="my-3 emailicon">
          <label className="label">كلمة المرور </label>
          <input type="password" name="password" id="passEdit" className="input_order pr-5" />
          <img src={padlockIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <div className="my-3 emailicon">
          <label className="label">تاكيد كلمة المرور </label>
          <input type="password" name="passwordCheck" id="passEditCheck" className="input_order pr-5" />
          <img src={padlockIcon} className="icon_email_info" alt="emailIcon" />
        </div>
        <h6 className="text-danger font-main font-weight-bold text-right pr-3">{messSaveEdit}</h6>
        <div className="text-right">
          <button className="input_order_btn_info ml-auto" onClick={SaveEditInformation}>
            حفظ التغييرات 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Info1;
