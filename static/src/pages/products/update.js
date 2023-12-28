import { useParams } from "react-router-dom";
import productService from "../../services/productService";
import { useEffect, useState } from "react";


async function editProduct(data, id) {
  const response = await productService.update({data, id});
  if (response && response.data) {
    return response;
  }
  return null;
}

function UpdateProduct() {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await editProduct(formData, id)
  };

  useEffect(() => {
    productService.get(id).then((response) => {
      if (response.data) {
        setFormData(response.data);
      }
    });
  }, [id]);


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

      <button type="submit">cập nhật</button>
    </form>
  );
}

export default UpdateProduct;
