import React, { useContext } from "react";
import ImgTest from "../../images/1.png";
import MyOrderData from "../../data/MyOrderData";
import Visa from "../../images/pay/visa.png";
import MestarCard from "../../images/pay/mastercard.png";
import Paypal from "../../images/pay/paypal.png";
import Maestro from "../../images/pay/maestro.png";
import CardBanek from "../../images/pay/cardBank.png";
import Discove from "../../images/pay/discover.png";
import { QafeerContext } from "../../context/context";
function CheckoutComponent() {
  const { Cart = [], Total, getCheckout } = useContext(QafeerContext);
  let Toggle = "";
  if (Cart.length === 0) {
    Toggle = <h3 className="font-main py-4 text-center">Cart Empty</h3>;
  } else {
    Toggle = Cart.map(({ name, amount, id, img, price }) => {
      return (
        <React.Fragment key={id}>
          <div className="d-flex justify-content-between order_1">
            <div>
              <img src={img} className="img_order_1" alt="img" />
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
              <h5 className="textmyoe">${price}</h5>
            </div>
          </div>
          <hr className="w-100 m-0 px-0" />
        </React.Fragment>
      );
    });
  }
  return (
    <div className="container">
      <div className="row mx-auto py-2">
        <div className="col-12 col-md-6 pt-4">
          <div>
            <h4 className="text-right font-main font-weight-bold pb-4">
              العنوان
            </h4>
            <form className="bgw_order">
              <div className="my-3">
                <label className="label">
                  الاسم <span className="star">* </span>
                </label>
                <input type="text" className="input_order" id="nameCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  الدولة <span className="star">* </span>
                </label>
                <input type="text" className="input_order" id="CountryCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  المدينة <span className="star">* </span>
                </label>
                <input type="text" className="input_order" id="CityCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  عنوان المنزل بالتفصيل <span className="star">* </span>
                </label>
                <input type="text" className="input_order" id="DetilsAddressCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  البريد الرمزي <span className="star">* </span>
                </label>
                <input type="text" className="input_order" id="codeCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  رقم الهاتف <span className="star">* </span>
                </label>
                <input type="number" className="input_order" id="phoneCheckOut" />
              </div>
              <div className="my-3">
                <label className="label">
                  البريد الالكتروني <span className="star">* </span>
                </label>
                <input type="email" className="input_order" id="emailCheckOut" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 pt-4">
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
              {/*  */}
              {Toggle}
              {/*  */}
              <div className="d-flex justify-content-between px-4 pt-4 pb-2">
                <h5 className="font-main">سعر الشراء</h5>
                <h4 className="font-main font-weight-bold textmyoe1">
                  ${Total}
                </h4>
              </div>
              <div className="d-flex justify-content-between p-4">
                <h5 className="font-main">التوصيل</h5>
                <h4 className="font-main font-weight-bold textmyoe1">$1.99</h4>
              </div>
              <hr className="w-100 m-0 px-0" />
              <div className="d-flex justify-content-between p-4">
                <h3 className="font-main">الاجمالي</h3>
                <h4 className="font-main font-weight-bold textmyoe1">
                  ${Total + 1.99}
                </h4>
              </div>
            </div>

            <div className="my-5">
              <h4 className="text-right font-main font-weight-bold pb-4">
                الدفع
              </h4>
              <nav>
                <div className="nav nav-tabs nav-tabs2" id="nav-tab" role="tablist">
                  <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                    <img src={Visa} className="visa mx-auto" alt="Visa" />
                  </a>
                  <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                  <img src={Paypal} className="visa mx-auto" alt="Visa" />
                  </a>
                  <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                    <img src={MestarCard} className="visa mx-auto" alt="Visa" />
                  </a>
                  <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                    <img src={Maestro} className="visa mx-auto" alt="Visa" />
                  </a>
                  <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                    <img src={Discove} className="visa mx-auto" alt="Visa" />
                  </a>
                  <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                    <img src={CardBanek} className="visa mx-auto" alt="Visa" />
                  </a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="p-3">
                      <div className="my-3">
                        <label className="label">رقم البطاقة</label>
                        <input type="text" className="input_order" placeholder="4144 **** **** ****" id="numberCard" />
                      </div>
                      <div className="my-3 dflex_small">
                        <div>
                          <label className="label">رمز الامان</label>
                          <input type="number" className="input_order" placeholder="***" id="SecCard" />
                        </div>
                        <div>
                          <label className="label">تاريخ الانتهاء </label>
                          <input type="number" className="input_order" placeholder="00/00" id="DataEndCard"/>
                        </div>
                      </div>
                      <div className="my-3">
                        <label className="label">اسم صاحب البطاقة</label>
                        <input type="text" className="input_order" id="nameUserCard" />
                      </div>
                      <div className="my-3">
                        <input type="submit" className="input_order_btn font-main" value="اتمام الدفع" onClick={getCheckout} />
                      </div>
                    </div>
                </div>
              </div>

              <div className="_pay">
                <div>
                  <h5 className="text-right font-main font-weight-bold pb-1">
                    اختر طريقة الدفع
                  </h5>
                  <div className="text-right">
                   
                    
                  
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
