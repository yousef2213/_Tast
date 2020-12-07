import React from "react";

export default function CartColums() {
  return (
    <div className="container-fluid d-none d-lg-block text-center mt-5">
      <div className="row mx-0 row_bg">
        <div className="col-lg-3">
          <h5 className="text-uppercase">المنتج</h5>
        </div>
        {/* price */}
        <div className="col-lg-3">
          <h5 className="text-uppercase">السعر</h5>
        </div>
        {/* quantity */}
        <div className="col-lg-3">
          <h5 className="text-uppercase">الكمية</h5>
        </div>
        {/* total */}
        <div className="col-lg-3">
          <h5 className="text-uppercase">الاجمالي</h5>
        </div>
  
      </div>
    </div>
  );
}
