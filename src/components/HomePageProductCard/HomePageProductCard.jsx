import { useNavigate } from "react-router-dom";
import productData from "./data";
import React from "react";
import { CartContext } from "../../context/CartContext";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);
  return (
    <div className="mt-10">
      <div className="bg-amber-600 p-5">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          Best Selling Products
        </h1>
      </div>
      <section className="text-gray-600 body-font bg-teal-900">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.map((item, index) => {
              const { image, title, price } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      className="lg:h-80 h-96 w-full"
                      onClick={() =>
                        navigate("/productInfo", { state: { product: item } })
                      }
                      src={image}
                      alt="img"
                    />
                    <div className="p-6 bg-orange-100">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        ${price}
                      </h1>
                      <div className="flex justify-center">
                        <button
                          className=" bg-amber-500 hover:bg-yellow-600 w-full text-black py-[4px] rounded-lg font-bold"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
