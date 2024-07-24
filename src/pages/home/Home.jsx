/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import Herosection from "../../components/herosection/Herosection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <Herosection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
