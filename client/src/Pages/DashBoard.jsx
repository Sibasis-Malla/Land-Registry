import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { getAllLands } from "../contexts/useContract/readContract";
import Web3Context from "../contexts";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const { Contract, account } = useContext(Web3Context);
  const [data, setData] = useState();
  useEffect(() => {
    getAllLands(Contract, account).then((data) => {
      console.log(data);
      setData(data);
    });
    // console.log(res)
  }, [Contract]);
  const Card = ({ land }) => {
    // console.log(land);
    return (
      <div class="w-[40vw] max-w-sm h-[60vh] bg-white border border-gray-200 rounded-lg shadow-xl shadow-black">
        <div></div>
        <Link to={`/${land.id}/preview`}>
          <div className="flex justify-center items-center">
            <img
              class="px-8 py-4 rounded-t-lg h-[45vh] w-[90%]"
              src={land.imageURI}
              alt="product image"
            />
          </div>
        </Link>
        <div class="px-5">
          <a href="#">
            <h5 class="font-medium text-lg font-serif tracking-tight flex justify-center items-center ">
              {land.name}
            </h5>
          </a>

          <div class="flex items-center justify-around mt-2">
            <div>
              <Link to={`/${land.id}/preview`}>
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Preview
                </button>
              </Link>
            </div>
            <div>
              <span class="font-medium text-lg font-serif">
                $: {land.currPrice} terra
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar selected="MarketPlace" />
      <div className="mt-6 ml-6">
        <h1 className=" text-3xl mb-6">Lands For Sale</h1>
        <ul className="flex justify-start items-center space-x-6">
          {data &&
            data.map((item, index) => {
              return <Card key={index} land={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
