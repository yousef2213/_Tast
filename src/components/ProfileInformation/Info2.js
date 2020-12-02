import React from "react";

function Info2() {
  return (
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
      <div className="text-right">
        <button className="input_order_btn_info ml-auto">حفظ التغييرات</button>
      </div>
    </form>
  );
}

export default Info2;
