import { Route, Switch } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TogarNumberOne from "./pages/TogarNumberOne";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Conditions from "./pages/Conditions";
import Signin from "./pages/Signin";
import ProfileInformation from "./pages/ProfileInformation";
import { QafeerContext } from "./context/context.js";
import { useContext } from "react";
import Dynmic from "./pages/Dynmic.js";
import CategoryById from "./pages/CategoryById.js";
import WishList from "./pages/WishList.js";

// import Form from "./components/Form"
import ContactUs from "./pages/ContactUs";

export default function App() {
  const { Login } = useContext(QafeerContext);
  if (Login) {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={ProfileInformation} /> */}
          <Route path="/حسابي" component={ProfileInformation} />
          <Route path="/الاشتراك" component={Conditions} />
          <Route path="/SingleProduct" component={SingleProductPage} />
          <Route path="/Cart" component={Cart} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/Checkout" component={CheckOut} />
          <Route path="/التجار" component={Profile} />
          <Route path="/المعارض" component={TogarNumberOne} />
          <Route path="/WishList" component={WishList} />
          <Route exact path="/category" component={Category} />
          <Route path="/category/:name" component={CategoryById} />
          <Route path="/categoryId/:id" component={Dynmic} />
          <Route path="/product/:id" component={SingleProductPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/ProfileInformation" component={Signin} />
          <Route path="/حسابي" component={Signin} />
          <Route path="/الاشتراك" component={Signin} />
          <Route path="/SingleProduct" component={Signin} />
          <Route path="/Cart" component={Signin} />
          <Route path="/Checkout" component={Signin} />
          <Route path="/التجار" component={Signin} />
          <Route path="/WishList" component={Signin} />
          <Route exact path="/category" component={Signin} />
          <Route path="/category/:name" component={Signin} />
          <Route path="/categoryId/:id" component={Signin} />
      </Switch>
    </div>
  );
}
