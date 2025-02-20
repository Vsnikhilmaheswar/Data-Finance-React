import React from "react";
import Single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8"> Basic Plan </h2>
          <p className="text-center text-4xl text-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8 ">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8  ">1 grand user</p>
            <p className="py-2 border-b border-gray-300 mx-8 ">
              sent up to 2gb
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-black">
            Start Trail
          </button>
        </div>

        <div className="w-full  shadow-xl bg-gray-100 flex flex-col p-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-grey-100"
            src={double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8"> Pro Plan</h2>
          <p className="text-center text-4xl text-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8 ">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8  ">1 grand user</p>
            <p className="py-2 border-b border-gray-300 mx-8 ">
              sent up to 2gb
            </p>
          </div>
          <button className="bg-black  w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-[#00df9a]">
            Start Trail
          </button>
        </div>

        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Enterprise Plan</h2>
          <p className="text-center text-4xl text-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8 ">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8  ">1 grand user</p>
            <p className="py-2 border-b border-gray-300 mx-8 ">
              sent up to 2gb
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-black">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
