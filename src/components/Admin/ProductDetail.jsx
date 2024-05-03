import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const ProductDetail = () => {
  const { loading, products, deleteProduct } = useContext(ProductContext);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className=" text-xl text-yellow-700 font-bold">All Product</h1>
        <Link to={"/addProduct"}>
          <button className="px-5 py-2 bg-yellow-800 border border-yellow-700 rounded-lg">
            Add Products
          </button>
        </Link>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-yellow-700 text-gray-700">
          <tbody>
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100 font-bold fontPara">
                S.No.
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Product
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Product Date
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Product Price
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Product Rating
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Product Image
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Action
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-700 text-slate-700 bg-slate-100">
                Action
              </th>
            </tr>
            {products.map((product, index) => (
              <tr key={index} className="text-gray-800">
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 first-letter:uppercase">
                  {product.productName}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 first-letter:uppercase">
                  {product.productDescription}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 first-letter:uppercase">
                  {product.price}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 first-letter:uppercase">
                  {product.rating}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 first-letter:uppercase">
                  {product.image}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer">
                  <Link to={`/updateProduct/${product._id}`}>Edit Product</Link>
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-700 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer">
                  <button onClick={() => handleDelete(product._id)}>
                    Delete product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
