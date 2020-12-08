import React, { useEffect } from "react";
import Container from "../components/ContactUs/Container";

function ConnectUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Container />;
}

export default ConnectUs;
