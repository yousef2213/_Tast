import Comments from "./components/Comments.js";
import More from "./components/More.js";
import Nav from "./components/Nav.js";
import ProductsCom from "./components/Products.js";
import Section from "./components/Section.js";
import SingleProduct from "./components/SingleProduct.js";
function App() {
  return (
    <div>
      <SingleProduct />
      <Nav />
      <Section />
      <More />
      <Comments />
      <ProductsCom />
    </div>
  );
}

export default App;
