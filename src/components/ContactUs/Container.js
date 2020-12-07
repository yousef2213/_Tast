import ConntactUs from "../../images/تواصل معنا/Component 54 – 1.png";
import ConntactUsTest from "../../images/تواصل معنا/email.png";
import favebook from "../../images/تواصل معنا/facebook.svg";
import instagram from "../../images/تواصل معنا/instagram.svg";
import twitter from "../../images/تواصل معنا/twitter.svg";
import youtube from "../../images/تواصل معنا/youtube.svg";
function Container() {
  return (
    <div className="container mx-auto">
      <div className="row mx-0 my-5">
        <div className="col-12 col-md-6">
          <div>
            <h1 className="text-right font-main color-main font-weight-bold">
              تواصل معنا
            </h1>
            <h6 className="ml-0 text-right p_conect">
              لا تتردد في التحدث إلينا إذا كان لديك أي أسئلة. نسعى للرد خلال 24
              ساعة.
            </h6>
            <form className="">
              <div className="my-3">
                <input
                  type="text"
                  className="input_textarea w-100"
                  id="name_connectus"
                  placeholder="الاسم"
                />
              </div>
              <div className="my-3">
                <input
                  type="email"
                  className="input_textarea w-100"
                  id="email_connectus"
                  placeholder="البريد الالكتروني"
                />
              </div>
              <div className="my-3">
                <textarea
                  className="w-100 input_textarea"
                  rows="4"
                  id="message_connectus"
                  placeholder="اكتب رسالتك هنا"
                />
              </div>
              <div className="my-3">
                <input
                  type="submit"
                  className="input_order_btn_textarea font-main"
                  value="أرسال"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="div_contact_relative">
            <img src={ConntactUsTest} className="img-fluid" alt="ConntactUs" />
            {/* <div className="div_contact_abslute">
              <h6 className="abs_1 py-2">technical@support.com</h6>
              <h6 className="abs_1 py-2">123456789</h6>
            </div> */}
            <div className="text-center d-flex justify-content-between w-75 mx-auto">
              <img src={favebook} className="img-fluid" alt="ConntactUs" />
              <img src={instagram} className="img-fluid" alt="ConntactUs" />
              <img src={twitter} className="img-fluid" alt="ConntactUs" />
              <img src={youtube} className="img-fluid" alt="ConntactUs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
