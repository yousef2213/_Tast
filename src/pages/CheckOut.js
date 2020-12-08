import { useEffect } from "react";
import CheckoutComponent from "../components/CheckOut/CheckoutComponent.js";
function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CheckoutComponent />
    </div>
  );
}

export default CheckOut;
