/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import Track from "../../components/track/Track";

const Productinfo = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const [selectedImg, setSelectedImg] = useState(
    "https://img.freepik.com/free-photo/cute-stylish-woman-with-walking-urban-city-business-street-dressed-warm-brown-coat-blue-suit-spring-autumn-trendy-fashion-street-style-wearing-sunglasses_285396-7127.jpg?t=st=1721552671~exp=1721556271~hmac=e2e54fca86236887889e448a71a30c30cc4c1fb3482684a2eb476ab0463bf2d4&w=826"
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <Layout>
      <div className="container px-3 py-3">
        <div className="section-wrapper flex xl:flex-row gap-6 md:flex-col md:items-center max-sm:flex-col">
          <div className="left flex gap-3  max-sm:flex-col-reverse">
            <div className="smallImg flex xl:flex-col md:flex-col sm:flex-row gap-1 w-24 cursor-pointer max-sm:flex-row  max-sm:w-20 max-sm:h-28">
              <img
                src="https://img.freepik.com/free-photo/cute-stylish-woman-with-walking-urban-city-business-street-dressed-warm-brown-coat-blue-suit-spring-autumn-trendy-fashion-street-style-wearing-sunglasses_285396-7127.jpg?t=st=1721552671~exp=1721556271~hmac=e2e54fca86236887889e448a71a30c30cc4c1fb3482684a2eb476ab0463bf2d4&w=826"
                onClick={() =>
                  setSelectedImg(
                    "https://img.freepik.com/free-photo/cute-stylish-woman-with-walking-urban-city-business-street-dressed-warm-brown-coat-blue-suit-spring-autumn-trendy-fashion-street-style-wearing-sunglasses_285396-7127.jpg?t=st=1721552671~exp=1721556271~hmac=e2e54fca86236887889e448a71a30c30cc4c1fb3482684a2eb476ab0463bf2d4&w=826"
                  )
                }
                alt="Product Image"
              />
              <img
                src="https://img.freepik.com/free-photo/young-woman-model-blue-winter-jacket_1303-20123.jpg?t=st=1721552728~exp=1721556328~hmac=c39f0bf20c66976aa1a0cd63edb59198a76d223ca3af163b5e9b77d5a0cb11ce&w=740"
                onClick={() =>
                  setSelectedImg(
                    "https://img.freepik.com/free-photo/young-woman-model-blue-winter-jacket_1303-20123.jpg?t=st=1721552728~exp=1721556328~hmac=c39f0bf20c66976aa1a0cd63edb59198a76d223ca3af163b5e9b77d5a0cb11ce&w=740"
                  )
                }
                alt="Product Image"
              />
              <img
                src="https://img.freepik.com/free-photo/full-shot-people-posing-together_23-2149409708.jpg?t=st=1721552784~exp=1721556384~hmac=e8937a6a7109e598813467774f39c202d7f4c44948ce0bb97673af0a92c1039c&w=360"
                onClick={() =>
                  setSelectedImg(
                    "https://img.freepik.com/free-photo/full-shot-people-posing-together_23-2149409708.jpg?t=st=1721552784~exp=1721556384~hmac=e8937a6a7109e598813467774f39c202d7f4c44948ce0bb97673af0a92c1039c&w=360"
                  )
                }
                alt="Product Image"
              />
              <img
                src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.1.1548945871.1716482833&semt=sph"
                onClick={() =>
                  setSelectedImg(
                    "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.1.1548945871.1716482833&semt=sph"
                  )
                }
                alt="Product Image"
              />
            </div>
            <div className="bigImg flex justify-center h-full w-full">
              <img src={selectedImg} alt="Product Image" />
            </div>
          </div>
          <div className="right w-1/2 max-sm:w-full">
            <h3 className="text-sm text-gray-400">SkinSugar</h3>
            <h1
              className="text-2xl m-3 font-semibold"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Product Name
            </h1>
            <div className="stars">
              <span className="flex items-center m-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </div>
            <p
              className="text-sm m-3 text-gray-600"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur provident quae nam iusto doloremque accusamus dicta
              explicabo cumque recusandae rem architecto, quibusdam expedita.
              Ipsam ipsa incidunt odio commodi iusto corporis vitae architecto
              nulla officiis quod, molestias distinctio facere consequuntur eum
              nemo, a, minus modi autem iste veritatis. Inventore perferendis,
              voluptatem fuga sapiente mollitia consequatur expedita, dolorum,
              animi quis ut alias.
            </p>
            <div className="main flex justify-between m-3 text-black font-bold text-xl py-8 flex-wrap gap-3">
              <p
                className="flex items-center justify-center"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PKR 3500
              </p>
              <div className="quantity flex gap-6 justify-center items-center">
                <button
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-2xl border-gray-500 items-center justify-center flex"
                  onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
                >
                  -
                </button>
                <p style={{ color: mode === "dark" ? "white" : "" }}>
                  {quantity}
                </p>
                <button
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-2xl border-gray-500 items-center justify-center flex"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-primary max-sm:mx-20 max-sm:mt-5"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="track mt-5 mb-5">
        <Track />
      </div>
    </Layout>
  );
};

export default Productinfo;
