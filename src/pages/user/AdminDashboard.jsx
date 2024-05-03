import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/Admin/ProductDetail";
import OrderDetail from "../../components/Admin/OrderDetail";
import UserDetail from "../../components/Admin/UserDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import fhs from "../../assets/images/fhs.png";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const { loading, products } = useContext(ProductContext);
  const { userLoading, users } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:4000/api/users");
      setUser(response.data);
    };

    fetchUser();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className=" bg-yellow-700 py-5 border border-yellow-100 rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className=" bg-yellow-100 py-5 rounded-xl border border-yellow-500">
            {/* image  */}
            <div className="flex justify-center">
              <img src={fhs} alt="" />
            </div>
            {/* text  */}
            <div className="">
              {/* Name  */}
              <h1 className=" text-center text-lg text-gray-800">
                <span className=" font-bold">Name : </span>
                {user?.name}
              </h1>

              {/* Date  */}
              <h1 className=" text-center text-lg text-gray-800">
                <span className=" font-bold">Date : </span>
                {user?.date}
              </h1>

              {/* Role  */}
              <h1 className=" text-center text-lg text-gray-800">
                <span className=" font-bold">Role : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-yellow-700 hover:bg-yellow-100 border-yellow-800 px-4 py-3 rounded-xl">
                  <div className="text-gray-800 w-12 h-12 mb-3 inline-block">
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      viewBox="110 110 210 210"
                      className="lucide lucide-shopping-basket"
                    />
                  </div>

                  <h2 className="title-font font-medium text-3xl text-gray-800 fonts1">
                    {Object.keys(products).length}
                  </h2>

                  <p className="text-gray-800  font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-yellow-700 hover:bg-yellow-100 border-yellow-800 px-4 py-3 rounded-xl">
                  <div className="text-gray-800 w-12 h-12 mb-3 inline-block">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      viewBox="110 110 210 210"
                      className="lucide lucide-shopping-basket"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-800 fonts1">
                    10
                  </h2>
                  <p className=" text-gray-800 font-bold">Total Orders</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-yellow-700 hover:bg-yellow-100 border-yellow-800 px-4 py-3 rounded-xl">
                  <div className="text-gray-800 w-12 h-12 mb-3 inline-block">
                    <FontAwesomeIcon
                      icon={faUsers}
                      viewBox="110 110 210 210"
                      className="lucide lucide-shopping-basket"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-gray-800 fonts1">
                    {Object.keys(users).length}
                  </h2>
                  <p className=" text-gray-800  font-bold">Total Users</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
