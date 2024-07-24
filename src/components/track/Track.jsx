/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import myContext from "../../context/data/myContext";

const Track = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <div className="track-wrapper flex items-center justify-center gap-10 flex-wrap">
        <div
          style={{
            backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            color: mode === "dark" ? "white" : "",
          }}
          className="track border-solid border-gray-400 border-2 hover:border-white hover:shadow-2xl shadow-slate-400 rounded-xl p-5"
        >
          <div className="content flex flex-col justify-center items-center">
            <IoBagOutline className="text-4xl text-green-700 mb-3" />
            <h2
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Whietning Lotion
            </h2>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Our Lotions are pure and made naturally
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            color: mode === "dark" ? "white" : "",
          }}
          className="track border-solid border-gray-400 border-2 rounded-xl p-5  hover:border-white hover:shadow-2xl shadow-slate-400"
        >
          <div className="content flex flex-col justify-center items-center">
            <IoBagOutline className="text-4xl text-green-700 mb-3" />
            <h2>Whietning Lotion</h2>
            <p>Our Lotions are pure and made naturally</p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            color: mode === "dark" ? "white" : "",
          }}
          className="track border-solid border-gray-400 border-2 rounded-xl p-5  hover:border-white hover:shadow-2xl shadow-slate-400"
        >
          <div className="content flex flex-col justify-center items-center">
            <IoBagOutline className="text-4xl text-green-700 mb-3" />
            <h2>Whietning Lotion</h2>
            <p>Our Lotions are pure and made naturally</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
