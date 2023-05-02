
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Web3Context from "../contexts";
import { getAllrequests,getLand, } from "../contexts/useContract/readContract";
import { buy } from "../contexts/useContract/writeContract";

import Navbar from "../Components/Navbar";



export default function Mybids() {
  const [data, setdata] = useState(null);
  const {Contract,account} = useContext(Web3Context)

  useEffect(()=>{
    getAllrequests(Contract).then(data=>{
      console.log(data)
        
        setdata(data);
        
        
    })
  },[Contract])
  const handleApprove = (LandId,approvedOwner,price)=>{
        buy(Contract,LandId,approvedOwner,price).then(res=>alert("Purchased Successfully"))
  }
  //Requesting All the appointments of the Execs to Display
 

  return (
    <>
    <Navbar></Navbar>
      <div class="mx-10 mt-5 relative overflow-x-auto shadow-md rounded-t-md">

        <div className="text-lg font-bold mt-7">Approved Bids</div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-t-md">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-t-md dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
               Land Id
              </th>
              <th scope="col" class="px-6 py-3">
                Bid Amount
              </th>
              <th scope="col" class="px-6 py-3">
               Bid By
              </th>
              <th scope="col" class="px-6 py-3">
              Action
              </th>
            </tr>
          </thead>
          {data &&
            data.map((res) => {
              const {bid,reqId,LandId,id,state,wallet} = res;
              // console.log(LandId)
              // let land = null
            
              return (
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    {LandId}
                    </th>
                    {/* <td class="px-6 py-4">  {lname}</td> */}
                    <td class="px-6 py-4">
                    {bid}
                    </td>
                    <td class="px-6 py-4">{wallet}</td>
                    <td class="px-6 py-4">
                     
                        <button
                          onClick={() => handleApprove(LandId,wallet,bid)}
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Pay
                        </button>
                      
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
}
