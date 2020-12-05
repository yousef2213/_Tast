import React from "react";
import Comments from "./Comments";
import More from "./More";
import Section from "./Section.js";


function Nav() {
  return (
    <div className="container mx-auto p-0 mt-5">
      <div className="row mx-0">
        <div className="col-12 w-100 mx-0">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link li active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">الوصف</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link li" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">معلومات اضافية</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link li" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">التعليقات(1)</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <Section />
            </div>
            <div className="tab-pane fade py-5" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <More/>
            </div>
            <div className="tab-pane fade py-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <Comments/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;

