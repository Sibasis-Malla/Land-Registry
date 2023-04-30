import React, { useState,useContext,useEffect } from "react";
import Navbar from "../Components/Navbar";
import { getAllLands } from "../contexts/useContract/readContract";
import Web3Context from "../contexts";
import { Link } from "react-router-dom";

const MyLands = () => {
  const {Contract,account}=useContext(Web3Context);
  const [data,setData] = useState();
  useEffect(()=>{
       getAllLands(Contract,account).then(data=>{
        const temp = data.filter(data.CurrOwner === account.currentAccount)
        console.log(temp)
        setData(temp)
       })
      // console.log(res)
  },[Contract])
  const Card = ({ land }) => {
    // console.log(land);
    return (
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/${land.id}/preview`} >
          <img
            class="p-8 rounded-t-lg"
            src= {land.imageURI}
            alt="product image"
          />
        </Link>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {land.name}
            </h5>
          </a>
            
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              {land.price}
            </span>
            <Link to={`/${land.id}/preview`} 
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Preview
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar selected="MyLands" />
      <div className="mt-6 ml-6">
        <h1 className=" text-3xl mb-6">My Lands</h1>
        <ul className="flex justify-start items-center space-x-6">
          {data && data.map((item, index) => {
            return <Card key={index} land={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyLands;
