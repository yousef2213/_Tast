import React from "react";
import "../style/Checkout.css";
import ImgTest from "../images/1.png";
import MyOrderData from "../data/MyOrderData";
import Visa from "../images/pay/visa.png";
import MestarCard from "../images/pay/mastercard.png";
import Paypal from "../images/pay/paypal.png";
import Maestro from "../images/pay/maestro.png";
import CardBanek from "../images/pay/cardBank.png";
import Discove from "../images/pay/discover.ong.png";
function CheckoutComponent() {
  return (
    <div className="container">
      <div className="row mx-auto py-5">
        <div className="col-12 col-md-6">
          <div>
            <h4 className="text-right font-main font-weight-bold pb-4">
              العنوان
            </h4>
            <form className="bgw_order">
              <div className="my-3">
                <label className="label">
                  الاسم <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  الدولة <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  المدينة <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  عنوان المنزل بالتفصيل <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  البريد الرمزي <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  رقم الهاتف <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
              <div className="my-3">
                <label className="label">
                  البريد الالكتروني <span className="star">* </span>
                </label>
                <input type="text" className="input_order" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div>
            <h4 className="text-right font-main font-weight-bold pb-4">
              طلباتي
            </h4>
            <div className="bgw_order2">
              <div className="d-flex justify-content-between p-3">
                <h6 className="font-main font-weight-bold">المنتج</h6>
                <h6 className="font-main font-weight-bold">السعر</h6>
              </div>
              <hr className="w-100 m-0 px-0" />
              {MyOrderData.map(({ name, amount, id }) => {
                return (
                  <React.Fragment key={id}>
                    <div className="d-flex justify-content-between order_1">
                      <div>
                        <img src={ImgTest} className="img_order_1" alt="img" />
                      </div>
                      <div>
                        <h6 className="font-main mb-0 font-weight-bold text-right textmyoe">
                          {name}
                        </h6>
                        <h6 className="font-main mb-0 font-weight-bold text-right textmyoe2">
                          {amount}
                        </h6>
                      </div>
                      <div className="price_order">
                        <h5 className="textmyoe">$200.32</h5>
                      </div>
                    </div>
                    <hr className="w-100 m-0 px-0" />
                  </React.Fragment>
                );
              })}
              <div className="d-flex justify-content-between px-4 pt-4 pb-2">
                <h5 className="font-main">سعر الشراء</h5>
                <h4 className="font-main font-weight-bold textmyoe1">$200.32</h4>
              </div>
              <div className="d-flex justify-content-between p-4">
                <h5 className="font-main">التوصيل</h5>
                <h4 className="font-main font-weight-bold textmyoe1">$3.99</h4>
              </div>
              <hr className="w-100 m-0 px-0" />
              <div className="d-flex justify-content-between p-4">
                <h3 className="font-main">الاجمالي</h3>
                <h4 className="font-main font-weight-bold textmyoe1">$3.99</h4>
              </div>
            </div>

            <div className="my-5">
              <h4 className="text-right font-main font-weight-bold pb-4">
                الدفع
              </h4>
              <div className="_pay">
                <div>
                  <h5 className="text-right font-main font-weight-bold pb-1">
                    اختر طريقة الدفع
                  </h5>
                  <div className="text-right">
                    <img src={Visa} className="visa" alt="Visa" />
                    <img src={MestarCard} className="visa" alt="Visa" />
                    <img src={Paypal} className="visa" alt="Visa" />
                    <img src={Maestro} className="visa" alt="Visa" />
                    <img src={Discove} className="visa" alt="Visa" />
                    <img src={CardBanek} className="visa" alt="Visa" />
                  </div>

                  <div className="p-3">
                    <div className="my-3">
                      <label className="label">رقم البطاقة</label>
                      <input
                        type="text"
                        className="input_order"
                        placeholder="7911**** **** **** ****"
                      />
                    </div>
                    <div className="my-3 dflex_small">
                      <div>
                        <label className="label">رمز الامان</label>
                        <input
                          type="text"
                          className="input_order"
                          placeholder="***"
                        />
                      </div>
                      <div>
                        <label className="label">تاريخ الانتهاء </label>
                        <input
                          type="text"
                          className="input_order"
                          placeholder="00/00"
                        />
                      </div>
                    </div>
                    <div className="my-3">
                      <label className="label">اسم صاحب البطاقة</label>
                      <input type="text" className="input_order" />
                    </div>
                    <div className="my-3">
                      <input
                        type="submit"
                        className="input_order_btn font-main"
                        value="اتمام الدفع"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
