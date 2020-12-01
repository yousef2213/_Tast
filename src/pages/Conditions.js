import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function Conditions() {
  return (
    <div className="container mx-auto">
      <div className="row">
        <div className="col-12 col-md-10 mx-auto py-5">
          <h3 className="text-center font-main font-weight-bold py-3 text1tabel">
            شروط الانضمام
          </h3>
          <h5 className="text-center text-primary font-main font-weight-bold py-3 text2tabel">
            أولا: يوجد أشتراك شهري لفئة في أي بي و الذهبية و لها مميزاتها الخاصة
            لكل فئة موضح داخل الجدول
          </h5>
          {/*  */}
          <table className="table table-bordered rounded ">
            <tbody>
              <tr>
                <th className="text-center tdHead">الفئة</th>
                <th className="text-center tdHead">في أي بي </th>
                <th className="text-center tdHead">الذهبية</th>
                <th className="text-center tdHead">البرونزية</th>
              </tr>
              <tr>
                <td className="text-center tdItem">
                  نسبة الفئة لكل منتج تم بيعه
                </td>
                <td className="text-center tdItem">%7.5</td>
                <td className="text-center tdItem">%8.57</td>
                <td className="text-center tdItem">%10</td>
              </tr>
              <tr>
                <td className="text-center tdItem2">نسبة نظام أفلييت</td>
                <td className="text-center tdItem2">%0.5</td>
                <td className="text-center tdItem2">%0.5</td>
                <td className="text-center tdItem2">%0.5</td>
              </tr>
              <tr>
                <td className="text-center tdItem" scope="row">
                  ترويج المنتجات
                </td>
                <td className="text-center tdItem checkAi">
                  <AiOutlineCheck />
                </td>
                <td className="text-center tdItem checkAi">
                  <AiOutlineCheck />
                </td>
                <td className="text-center tdItem checkAi">
                  <AiOutlineClose />
                </td>
              </tr>
              <tr>
                <td className="text-center tdItem2" scope="row">
                  المنتجات في اول صفحة
                </td>
                <td className="text-center tdItem2 checkAi">
                  <AiOutlineCheck />
                </td>
                <td className="text-center tdItem2 checkAi">
                  <AiOutlineClose />
                </td>
                <td className="text-center tdItem2 checkAi">
                  <AiOutlineClose />
                </td>
              </tr>
              <tr>
                <td className="text-center tdItem" scope="row">
                  لوحة الاعلانات
                </td>
                <td className="text-center tdItem"> مجاناً</td>
                <td className="text-center tdItem"> مجاناً</td>
                <td className="text-center tdItem"> 30 ريال أسبوعي</td>
              </tr>
              <tr>
                <td className="text-center tdItem2" scope="row">
                  قيمة الاشتراك الشهري
                </td>
                <td className="text-center tdItem2">8 ريالات </td>
                <td className="text-center tdItem2">6 ريالات </td>
                <td className="text-center tdItem2">مجاناً </td>
              </tr>
              <tr className="border-0">
                <td className="text-center border-0" scope="row"></td>
                <td className="text-center border-0" scope="row">
                  <button className=" btn-4trak">اشتراك</button>
                </td>
                <td className="text-center border-0" scope="row">
                  <button className=" btn-4trak">اشتراك</button>
                </td>
                <td className="text-center border-0" scope="row">
                  <button className=" btn-4trak">اشتراك</button>
                </td>
              </tr>
            </tbody>
          </table>

          <ol>
            <li className="text-right orderlistitem">
              نسبة الفائدة لكل منتج تم بيعه : هي النسبة تخصم من كل منتج تم بيعه
              عن طريق المنصة قفير.
            </li>
            <li className="text-right orderlistitem">
              نظام أفلييت :تؤخذ نسبة من كل عملية بيع و تعطى للمروج الذي روج عن
              المنتج و يحق للتاجر بزيادة هذه النسبة.
            </li>
            <li className="text-right orderlistitem">
              ترويج المنتجات : سوف يتم ترويج المنتجات علي ستوري أنستجرام.
            </li>
            <li className="text-right orderlistitem">
              لوحة الأعلانات :سوف نعرض ل ثلاث لوحات أعلانية داخل المنصة و
              التطبيقات لمدة شهر لكل أعلان أسبوع, و الذهبية أعلانان لمدة شهر و
              كل أعلان أسبوع ,أما البرونزية الأعلان الواحد قيمته 30في الأسبوع.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Conditions;
