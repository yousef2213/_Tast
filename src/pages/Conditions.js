import React, { useEffect } from "react";
import CotainerCondetions from "../components/Conditions/CotainerCondetions";

function Conditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <CotainerCondetions />;
}

export default Conditions;
