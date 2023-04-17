import React, { useState } from "react";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const BuySell = () => {
  const [NumberOfInputs, setNumberOfInputs] = useState([1]);
  const [count, setCount] = useState(2);
  console.log(NumberOfInputs);
  return (
    <div>
      <Navbar selected="Buy and Sell" />
      <div>
        <div className=" flex flex-col w-1/3 justify-around">
          {NumberOfInputs.map((items, index) => {
            return (
              <div key={items} className="flex flex-row justify-around">
                <Input text="Latitude" />
                <Input text="Longitude" />
                <div
                  onClick={() => {
                    let newArr = [
                      ...NumberOfInputs.slice(0, index),
                      ...NumberOfInputs.slice(index + 1),
                    ];
                    setNumberOfInputs([...newArr]);
                  }}
                >
                  <AiOutlineDelete className="mt-8" size={30} />
                </div>
              </div>
            );
          })}
          <div className="flex justify-around">
            <button
              onClick={() => {
                setNumberOfInputs([...NumberOfInputs, count]);
                setCount(count + 1);
              }}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                + Add more Coordinates
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
