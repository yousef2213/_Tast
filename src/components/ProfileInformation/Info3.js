import React from "react";

function Info3() {
  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-12 mx-0 px-0">
          <table className="InfoTabel">
            <tbody>
              <tr>
                <td className="text-center tdtabelinfo">رقم الطلب</td>
                <td className="text-center tdtabelinfo">تاريخ الطلب </td>
                <td className="text-center tdtabelinfo">حالة الطلب</td>
                <td className="text-center tdtabelinfo">التكلفة</td>
                <td className="text-center tdtabelinfo">الاجرائات</td>
              </tr>
              <tr>
                <td className="text-center td">#12345</td>
                <td className="text-center td">$329.99</td>
                <td className="text-center td">قيد التوصيل</td>
                <td className="text-center td">$329.99</td>
                <td className="text-center td">عرض الطلب</td>
              </tr>
              <tr>
                <td className="text-center td">#12345</td>
                <td className="text-center td">$329.99</td>
                <td className="text-center td">قيد التوصيل</td>
                <td className="text-center td">$329.99</td>
                <td className="text-center td">عرض الطلب</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Info3;
