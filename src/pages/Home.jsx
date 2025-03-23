import React from "react";
import BottomHeader from "../components/header/BottomHeader";
import HeroSection from "../components/Home/HeroSection";
import PopularProducts from "../components/header/PopularProducts";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import Layout from "../components/common/layout";

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
