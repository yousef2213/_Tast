import React, { useContext } from "react";
import emailIcon from "../../images/تسجيل الدخول/envelope (1).png";
import padlockIcon from "../../images/تسجيل الدخول/padlock (1).png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { QafeerContext } from "../../context/context";
function SigninCol1() {
  const { getSignIn,mess } = useContext(QafeerContext);
  return (
    <form className="my-4">
      <h4 className="text-right font-main font-weight-bold pb-3">
        تسجيل الدخول
      </h4>
      <div className="my-3 emailicon">
        <label className="label">بريدك الالكتروني</label>
        <input type="email" name="email" className="input_order pr-5" id="valueemail" />
        <img src={emailIcon} className="icon_email" alt="emailIcon" />
      </div>
      <div className="my-3 emailicon">
        <label className="label">تاكيد كلمة المرور </label>
        <input type="password" name="password" className="input_order pr-5" id="valuepassword" />
        <img src={padlockIcon} className="icon_email" alt="emailIcon" />
      </div>
      <div className="form-check d-block text-right mr-3">
        <input className="form-check-input form-check-inpu" type="checkbox" value="" id="defaultCheck1" />
        <label htmlFor="defaultCheck1"  className="form-check-label mx-1 font-main font-weight-bold my-0 mr-4">
        تذكرني
        </label>
      </div>
      <h6 className="text-danger w-100 text-right font-main">{mess}</h6>
      <div className="text-right d-flex">
        <div>
          <button
            type="submit"
            className="input_order_btn my-0 font-main d-inline-block text-center ml-auto px-5"
            onClick={getSignIn}
          >
            دخول
          </button>
        </div>
      </div>
      <h4 className="font-main text-right py-3">او بواسطة</h4>
      <div className="text-right w-100">
        <AiFillFacebook className="icon_sign" />
        <FaInstagramSquare className="icon_sign" />
        <FaTwitterSquare className="icon_sign" />
      </div>
    </form>
  );
}

export default SigninCol1;
