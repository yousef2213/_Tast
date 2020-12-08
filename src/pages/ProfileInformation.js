import React, { useEffect } from "react";
import ProfileInformationComponent from "../components/ProfileInformation/ProfileInformationComponent.js";
function ProfileInformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto">
      <ProfileInformationComponent />
    </div>
  );
}

export default ProfileInformation;
