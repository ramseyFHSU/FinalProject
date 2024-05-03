import React from "react";
import Layout from "../../components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state.product;
  const { addToCart } = React.useContext(CartContext);
  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <img
                className=" w-full lg:h-[39em] rounded-lg"
                src={product.image}
                alt=""
              />
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {product.title}
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a>
                          <FontAwesomeIcon icon={faStar} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faStar} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faStar} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FontAwesomeIcon icon={faStar} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>${product.price}</span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description :
                  </h2>
                  <p>{product.desc}</p>
                </div>

                <div className="mb-6 " />
                <div className="flex flex-wrap items-center mb-6">
                  <button
                    className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
