import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/product-detail/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/product-detail/p2">Product 2</Link>
        </li>
        <li>
          <Link to="/product-detail/p3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
