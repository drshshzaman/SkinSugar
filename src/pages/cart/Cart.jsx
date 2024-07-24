/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { FaRegTrashAlt } from "react-icons/fa";
import myContext from "../../context/data/myContext";
import Modal from "../../components/modal/modal";

const Cart = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <div className="container max-md:mt-10 mx-auto">
        <h1
          className="flex text-center items-center justify-center text-3xl font-semibold mt-3"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Your Cart
        </h1>
        <div className="wrapper flex items-center text-center justify-between gap-10 max-sm:flex-col max-sm:gap-2">
          <div className="left w-1/2 relative flex mt-12 gap-4 items-center justify-center  drop-shadow-xl max-sm:w-full max-sm:-ml-12">
            <div className="img">
              <img
                className="h-36 max-sm:h-24"
                src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.1.1548945871.1716482833&semt=sph"
                alt="Product"
              />
            </div>
            <div className="content">
              <h1
                className="font-semibold text-lg"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                This is the title
              </h1>
              <p className="text-sm text-gray-600">Description</p>
              <div
                className="price-quan mt-4 flex gap-5 justify-between items-center"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                <p className="font-bold">PKR 3500</p>
                <p>Quantity x3</p>
                <button className="absolute top-0 right-0 hover:text-red-600 transition-all ease-in-out text-xl">
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </div>
          <div
            className="right mt-12 shadow-lg p-6 rounded-lg"
            style={{
              color: mode === "dark" ? "white" : "",
              backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            }}
          >
            <div className="total flex items-center justify-between gap-20 mb-3">
              <p>Subtotal</p>
              <p>PKR 3500</p>
            </div>
            <div className="total flex justify-between gap-10">
              <p>Shipping</p>
              <p>PKR 100</p>
            </div>
            <div className="total-amount flex justify-between gap-10 mt-10 mb-5 font-bold text-xl">
              <p>Total</p>
              <p>PKR 3800</p>
            </div>
            <Modal />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
