import { useLoaderData } from "react-router-dom";
import productService from "../../services/productService";

export async function loader({ params }) {
  const response = await productService.gets(null);
  if (response && response.data) {
    console.log(response.data.results);
    return response.data.results;
  }
  return [];
}

function Products() {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((p) => (
          <>
            <span> {p.name} </span>
            <span> {p.price} </span>
          </>
        ))
      ) : (
        <p>There are no data!</p>
      )}
    </div>
  );
}

export default Products;
