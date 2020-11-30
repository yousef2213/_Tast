import overs from "../../images/over.svg";
import overs2 from "../../images/over2.svg";
import overs3 from "../../images/over3.svg";
import overs4 from "../../images/over4.svg";
function Sec2() {
  return (
    <div className="container mx-auto">
      <div className="row mx-0 my-3 b_g py-2">
        <div className="col col-6 col-sm-6 col-md-3 mx-auto d-flex my-3">
          <div>
            <img src={overs} className="icon_Sec2" alt="overs" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold nameSec2">
              العروض والخصومات
            </h5>
            <h6 className="font-main font-weight-bold mb-0 PSec2">دفع امن</h6>
          </div>
        </div>
        <div className="col col-6 col-md-3 mx-auto d-flex my-3">
          <div>
            <img src={overs2} className="icon_Sec2" alt="overs" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 nameSec2"> طرق الدفع</h5>
            <h6 className="font-main font-weight-bold mb-0 PSec2">
              خصومات وعروض دائمة
            </h6>
          </div>
        </div>
        <div className="col col-6 col-md-3 mx-auto d-flex  my-3">
          <div>
            <img src={overs3} className="icon_Sec2" alt="overs" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold nameSec2">
              التوصيل
            </h5>
            <h6 className="font-main font-weight-bold mb-0 PSec2">
              خدمات توصيل لاي مكان
            </h6>
          </div>
        </div>
        <div className="col col-6 col-md-3 mx-auto d-flex  my-3">
          <div>
            <img src={overs4} className="icon_Sec2" alt="overs" />
          </div>
          <div className="text-right">
            <h5 className="mb-0 font-main font-weight-bold nameSec2">
              مركز المساعدة
            </h5>
            <h6 className="font-main font-weight-bold mb-0 PSec2">
              نظام مساعدة 24 ساعة
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
