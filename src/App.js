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

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Signin" component={Signin} />
        <Route path="/ProfileInformation" component={ProfileInformation} />
        <Route path="/حسابي" component={Profile} />
        <Route path="/الاشتراك" component={Conditions} />
        <Route path="/SingleProduct" component={SingleProductPage} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Checkout" component={CheckOut} />
        <Route path="/التجار" component={TogarNumberOne} />
        <Route path="/category" component={Category} />
      </Switch>
      <Footer />
    </div>
  );
}
