import React from "react";
import emailIcon from "../../images/تسجيل الدخول/envelope (1).png";
import padlockIcon from "../../images/تسجيل الدخول/padlock (1).png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
function SigninCol1() {
  return (
    <form className="my-4">
      <h4 className="text-right font-main font-weight-bold pb-3">
        تسجيل الدخول
      </h4>
      <div className="my-3 emailicon">
        <label className="label">بريدك الالكتروني</label>
        <input type="text" className="input_order pr-5" />
        <img src={emailIcon} className="icon_email" alt="emailIcon" />
      </div>
      <div className="my-3 emailicon">
        <label className="label">تاكيد كلمة المرور </label>
        <input type="password" className="input_order pr-5" />
        <img src={padlockIcon} className="icon_email" alt="emailIcon" />
      </div>
      <div className="text-right d-flex">
        <div>
          <button className="input_order_btn my-0 font-main d-inline-block text-center ml-auto px-5 ">
            دخول
          </button>
        </div>
        <div className="form-group form-check my-0 align-self-center mr-5">
          <input type="radio" className="form-check-inpu" id="exampleCheck1" />
          <label
            className="form-check-label mx-1 font-main font-weight-bold my-0"
            htmlFor="exampleCheck1"
          >
            تذكرني
          </label>
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
