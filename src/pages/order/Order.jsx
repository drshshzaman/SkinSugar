/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);
  console.log(context);
  const { name, rollno } = context;

  return (
    <Layout>
      <p>order</p>
      <h1>name: {name}</h1>
      <h1>Rollno: {rollno}</h1>
    </Layout>
  );
};

export default Order;
