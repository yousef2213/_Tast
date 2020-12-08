import React, { useEffect } from "react";
import Wishlistcontainer from "../components/Wishlist/wishlistcontainer";

function WishList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-5">
      <Wishlistcontainer />
    </div>
  );
}

export default WishList;
