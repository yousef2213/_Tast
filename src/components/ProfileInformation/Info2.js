import React, { useContext } from "react";
import { QafeerContext } from "../../context/context";

function Info2() {
  const { messSaveEdit2, SaveEditInformationAddress } = useContext(QafeerContext);
  return (
    <form className="bgw_order">
      <div className="my-3">
        <label className="label">
          الاسم <span className="star">* </span>
        </label>
        <input type="text" id="nameinfo2" name="name" className="input_order" />
      </div>
      <div className="my-3">
        <label className="label">
          الدولة <span className="star">* </span>
        </label>
        <input
          type="text"
          name="country"
          id="countryEdit"
          className="input_order"
        />
      </div>
      <div className="my-3">
        <label className="label">
          المحافظة <span className="star">* </span>
        </label>
        <input
          type="text"
          name="center"
          id="center"
          className="input_order"
        />
      </div>
      <div className="my-3">
        <label className="label">
          الولاية <span className="star">* </span>
        </label>
        <input type="text" name="wlaya" id="wlayaEdit" className="input_order" />
      </div>
      <div className="my-3">
        <label className="label">
          عنوان المنزل بالتفصيل <span className="star">* </span>
        </label>
        <input
          type="text"
          name="addresshome"
          id="addresshome"
          className="input_order"
        />
      </div>
      <div className="my-3">
        <label className="label">
          البريد الرمزي <span className="star text-muted">(Option) </span>
        </label>
        <input
          type="text"
          id="codehome"
          id="codehome"
          className="input_order"
        />
      </div>
      <div className="my-3">
        <label className="label">
          رقم الهاتف <span className="star">* </span>
        </label>
        <input type="text" id="numberedit2" className="input_order" />
      </div> 
      <div className="my-3">
        <label className="label">
          البريد الالكتروني <span className="star">* </span>
        </label>
        <input type="text" name="emailedit2" id="emailedit2" className="input_order" />
      </div>
      <h6 className="text-danger font-main font-weight-bold text-right pr-3">
        {messSaveEdit2}
      </h6>
      <div className="text-right">
        <button className="input_order_btn_info ml-auto" onClick={SaveEditInformationAddress}>حفظ التغييرات</button>
      </div>
    </form>
  );
}

export default Info2;
