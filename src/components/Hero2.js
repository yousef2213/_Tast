import Hero2_Img from "../images/hero2.png";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiCustomize } from "react-icons/bi";
import { GiStarsStack } from "react-icons/gi";
import { FaInstagramSquare, FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { QafeerContext } from "../context/context";

function Hero2() {
  const { User } = useContext(QafeerContext);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6 text-right">
          <div className="d-flex mb-4">
            <FaRegUser className="align-self-center info" />
            <h4 className="font-main mb-0">{User.display_name || User.user_data.display_name}</h4>
          </div>
          <div className="d-flex mb-4">
            <GiStarsStack className="align-self-center info" />
            <h5 className="font-main mb-0"> تاجر من الدرجة الاولي</h5>
          </div>
          <div className="d-flex mb-4">
            <BiCustomize className="align-self-center info" />
            <h5 className="font-main mb-0">احذية وهواتف</h5>
          </div>
          <div className="d-flex mb-4">
            <MdEmail className="align-self-center info" />
            <h5 className="font-main mb-0"> {User.user_email || User.user_data.user_email}</h5>
          </div>
          <div className="d-flex mb-4">
            <FaPhoneAlt className="align-self-center info" />
            <h5 className="font-main mb-0">{User.user_phone || 123} </h5>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img src={Hero2_Img} className="img-fluid w-100" alt="Hero2_Img" />
          <div className="text-center  mt-3">
            <FaInstagramSquare className="fa" />
            <AiFillFacebook className="fa" />
            <AiFillTwitterSquare className="fa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
