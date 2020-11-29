import { AiOutlineRadarChart } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import { Ri24HoursLine } from "react-icons/ri";
function Sec2() {
  return (
    <div className="container mx-auto">
      <div className="row mx-0 my-3 b_g py-2">
        <div className="col-12 col-md-3 mx-auto d-flex my-3">
          <div>
            <AiOutlineRadarChart className="icon_Sec2" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold">
              العروض والخصومات
            </h5>
            <h6 className="font-main font-weight-bold mb-0">دفع امن</h6>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto d-flex my-3">
          <div>
            <FiCreditCard className="icon_Sec2" />
          </div>
          <div className="text-right">
            <h5 className="mb-0"> طرق الدفع</h5>
            <h6 className="font-main font-weight-bold mb-0">خصومات وعروض دائمة</h6>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto d-flex  my-3">
          <div>
            <IoIosRocket className="icon_Sec2" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold">
              التوصيل
            </h5>
            <h6 className="font-main font-weight-bold mb-0">خدمات توصيل لاي مكان</h6>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto d-flex  my-3">
          <div>
            <Ri24HoursLine className="icon_Sec2" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold">
               مركز الخدمات
            </h5>
            <h6 className="font-main font-weight-bold mb-0">نظام مساعدة 24 ساعة</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
