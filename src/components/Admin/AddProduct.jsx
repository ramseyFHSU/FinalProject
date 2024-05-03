import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

const AddProductPage = () => {
  const { createProduct } = useContext(ProductContext); // Use the context
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    price: "",
    image: "",
    rating: "",
    category: "",
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {/* Login Form  */}
        <div className="login_Form bg-yellow-100 px-8 py-6 border border-yellow-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-gray-900 ">
              Add Product
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Input One  */}
            <div className="mb-3">
              <input
                type="text"
                name="productName"
                placeholder="Product Title"
                value={product.productName}
                onChange={handleChange}
                className="bg-yellow-70 text-gray-700 border border-yellow-700 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
              />
            </div>

            {/* Input Two  */}
            <div className="mb-3">
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={product.price}
                onChange={handleChange}
                className="bg-yellow-50 text-yellow-700 border border-yellow-700 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
              />
            </div>

            {/* Input Three  */}
            <div className="mb-3">
              <input
                type="text"
                name="image"
                placeholder="Product Image Url"
                value={product.image}
                onChange={handleChange}
                className="bg-yellow-50 text-yellow-700 border border-yellow-700 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="rating"
                placeholder="Product Rating"
                value={product.rating}
                onChange={handleChange}
                className="bg-yellow-50 text-yellow-700 border border-yellow-700 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="productDescription"
                placeholder="Product Description"
                rows="5"
                value={product.productDescription}
                onChange={handleChange}
                className="bg-yellow-50 text-yellow-700 border border-yellow-700 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
              ></textarea>
            </div>

            {/* Add Product Button  */}
            <div className="mb-3">
              <button
                type="submit"
                className="bg-yellow-800 hover:bg-yellow-600 w-full text-gray text-center py-2 font-bold rounded-md "
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
