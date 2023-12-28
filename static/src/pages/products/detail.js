import React, { useState } from "react";
import productService from "../../services/productService";

async function createProduct(data) {
  const response = await productService.create(data);
  if (response && response.data) {
    // console.log(response);
    return response.data;
  }
  return null;
}

function ProductDetail({ editable = false, product = null }) {
  const [formData, setFormData] = useState(product);

  const onSubmit = async (e) => {
    e.preventDefault();
    const createdProduct = await createProduct(formData);
    console.log("Created Product:", createdProduct);
  };

  if (editable) {
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={formData ? formData.name : ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={formData ? formData.price : ""}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <button type="submit">Thêm</button>
      </form>
    );
  }

  return (
    <div>
      {product ? (
        <div>
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>
      ) : (
        <p>Không có thông tin</p>
      )}
    </div>
  );
}

export default ProductDetail;
