import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
 

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome/">
        <Welcome />
      </Route>
      <Route path="/products/">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
