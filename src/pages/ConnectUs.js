import React from "react";

function ConnectUs() {
  return (
    <div>
      <div className="container">
        <div className="row mx-0 py-2">
          <div className="col-12 col-md-10 mx-auto pt-4">
            <div>
              <h4 className="text-right font-main font-weight-bold pb-4">
                تواصل معنا 
              </h4>
              <form className="bgw_order">
                <div className="my-3">
                  <label className="label">
                    الاسم <span className="star">* </span>
                  </label>
                  <input type="text" className="input_order" id="name_connectus" />
                </div>
                <div className="my-3">
                  <label className="label">
                    البريد الالكتروني <span className="star">* </span>
                  </label>
                  <input
                    type="email"
                    className="input_order"
                    id="email_connectus"
                  />
                </div>
                <div className="my-3">
                    <input type="submit" className="input_order_btn font-main" value="أرسال" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectUs;
