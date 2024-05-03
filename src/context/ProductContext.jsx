import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// Create a context
export const ProductContext = createContext();

// Create a provider which will fetch and provide the products
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.log("Error: response.data is not an array");
        setProducts([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setProducts([]);
      setLoading(false);
    }
  };

  // Get Single Product Function
  const getSingleProductFunction = async (id) => {
    setLoading(true);
    try {
      console.log("test");
      const response = await axios.get(
        `http://localhost:4000/api/products/${id}`
      );

      const product = response.data;
      setProduct({
        title: product?.productName,
        price: product?.price,
        productImageUrl: product?.image,
        category: product?.category,
        description: product?.productDescription,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
      return product;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast.error("Product not found");
      } else {
        toast.error("An error occurred while fetching the product");
      }
      setLoading(false);
    }
  };

  const createProduct = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/products",
        product
      );
      setProducts([...products, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:4000/api/products`,
        {
          id: id,
          ...updatedProduct,
        },
        console.log(updateProduct)
      );
      setProducts(
        products.map((product) =>
          product._id === id ? response.data : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products`, {
        id: id,
      });
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        setLoading,
        getSingleProductFunction,
        getAllProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
