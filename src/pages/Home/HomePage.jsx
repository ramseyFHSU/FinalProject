import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../components/HeroSection/HeroSection";
import Category from "../../components/Category/Category.jsx";
import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      {/* <Track /> */}
      <Testimonial />
    </Layout>
  );
};

export default HomePage;
