import bane from "../images/CALL TO ACTION.png"

function Hero() {
  return (
    <div className="container-fluid px-0 mx-auto">
      <div className="row mx-0 px-0">
        <div className="her_test">
          <img src={bane} className="img-fluid img_hero_2" />
        </div>
      </div>
    </div>
    // <div className="col-12 hero">
    //   <div className="work_hero">
    //     <div className="test">
    //       <h4 className="h4_hero font-main">افضل الاسعار علي منتجات الاحذية</h4>
    //       <h4 className="h4_hero h4_hero_2  font-main">اسعار تبدا من 200$</h4>
    //       <button className="btn_hero font-main mt-2">تسوق الان</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
