import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import NotFound from "./pages/404/NotFound";
import "./App.css";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allProducts/AllProducts";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/user/AdminDashboard";
import MyState from "./context/myState";

import UpdateProductPage from "./components/Admin/UpdateProductPage";
import AddProductPage from "./components/Admin/AddProduct";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/addProduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateProduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </>
  );
}
export default App;
