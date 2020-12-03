import React from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import { FaUserAlt, FaShoppingBag } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { BsFolderSymlinkFill } from "react-icons/bs"
import { Link } from "react-router-dom";
function ProfileInformationComponent() {
  return (
  <div className="row mx-0 my-5">
    <div className="col-12 col-md-3">
      <div className="nav flex-column nav-pills abyd" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link nav-link-one active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
          <div className="lastSectionSideBar text-center">
            <div className="divimgSidebar">
              <FaUserAlt className="imgSidebar" />
            </div>
          </div>
          <h6 className="h6sidebar">البيانات الشخصية</h6>
        </a>
        <a className="nav-link nav-link-one" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
        <div className="lastSectionSideBar text-center">
            <div className="divimgSidebar">
              <HiLocationMarker className="imgSidebar" />
            </div>
          </div>
          <h6 className="h6sidebar">العنوان</h6>
        </a>
        <a className="nav-link nav-link-one" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
        <div className="lastSectionSideBar text-center">
            <div className="divimgSidebar">
              <FaShoppingBag className="imgSidebar" />
            </div>
          </div>
          <h6 className="h6sidebar"> طلباتي</h6>
        </a>
        <Link className="nav-link nav-link-one"  data-toggle="pill" to="/" role="tab" aria-controls="v-pills-settings" aria-selected="false">
          <div className="lastSectionSideBar text-center">
            <div className="divimgSidebar">
                <BsFolderSymlinkFill className="imgSidebar" />
            </div>
          </div>
          <h6 className="h6sidebar"> تسجيل الخروج</h6>
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-9 mx-0 px-0">
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <Info1 />
        </div>
        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <Info2 />
        </div>
        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          <Info3 />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProfileInformationComponent;
