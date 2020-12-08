import React, { useEffect } from "react";
import TogarNumberOneComponent from "../components/Task2/TogarNumberOneComponent";

function TogarNumberOne() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TogarNumberOneComponent />
    </div>
  );
}

export default TogarNumberOne;
