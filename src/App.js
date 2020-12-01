import { Route, Switch } from "react-router-dom";
import Merchants from "./pages/Profile";
import SingleProductPage from "./pages/SingleProductPage.js";
import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TogarNumberOne from "./pages/TogarNumberOne";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      {/* <Form /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/SingleProduct" component={SingleProductPage} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Checkout" component={CheckOut} />
        <Route exact path="/Classifications" component={TogarNumberOne} />
        <Route exact path="/category" component={Category} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}
