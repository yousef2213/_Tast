import { Route, Switch } from "react-router-dom";
import Merchants from "./pages/Merchants";
import SingleProductPage from "./pages/SingleProductPage.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Merchants" component={Merchants} />
        <Route exact path="/SingleProduct" component={SingleProductPage} />
        <Route exact path="/Checkout" component={CheckOut} />
      </Switch>
      <Footer />
    </div>
  );
}

