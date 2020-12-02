import React from "react";

export default function CartColums() {
  return (
    <div className="container-fluid d-none d-lg-block text-center my-5">
      <div className="row mx-0">
        <div className="col-lg-2">
          <h5 className="text-uppercase">المنتج</h5>
        </div>
        {/* name products */}
        <div className="col-lg-2">
          <h5 className="text-uppercase">اسم المنتج</h5>
        </div>
        {/* price */}
        <div className="col-lg-2">
          <h5 className="text-uppercase">السعر</h5>
        </div>
        {/* quantity */}
        <div className="col-lg-2">
          <h5 className="text-uppercase">الكمية</h5>
        </div>
        {/* total */}
        <div className="col-lg-2">
          <h5 className="text-uppercase">الاجمالي</h5>
        </div>
        {/* remover */}
        <div className="col-lg-2">
          <h5 className="text-uppercase">حذف المنتج</h5>
        </div>
      </div>
    </div>
  );
}
