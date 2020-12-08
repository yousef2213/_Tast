import React, { useEffect } from "react";
import SigninCol1 from "../components/Signin/SigninCol1";
import SigninCol2 from "../components/Signin/SigninCol2";

function Signin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="row mx-0">
        <div className="col-12 col-md-6 mx-auto">
          <SigninCol1 />
        </div>
        <div className="col-12 col-md-6 mx-auto">
          <SigninCol2 />
        </div>
      </div>
    </div>
  );
}

export default Signin;
