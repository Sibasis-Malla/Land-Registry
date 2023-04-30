
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Web3Context from "../contexts";
import { getAllrequests } from "../contexts/useContract/readContract";
import Navbar from "../Components/Navbar";



export default function Requests() {
  const [data, setdata] = useState(null);
  const {Contract,account} = useContext(Web3Context)
  const [id,setId] = useState()
  const [bid,setBId] = useState()


  const [curr, setCurr] = useState(null);
  console.log(id);
  useEffect(()=>{
    getAllrequests(Contract).then(data=>{
        const temp = data.filter(data.currOwner === account.currentOwner);
        
        
        
    })
  })
  //Requesting All the appointments of the Execs to Display
 

  return (
    <>
    <Navbar></Navbar>
      <div class="mx-10 mt-5 relative overflow-x-auto shadow-md rounded-t-md">

        <div className="text-lg font-bold mt-7">Requests by Interested Party to Approve</div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-t-md">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-t-md dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
               Land Id
              </th>
              <th scope="col" class="px-6 py-3">
                Land Name
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
          {/* {data &&
            data.map((res) => {
              const {
                name,
                title,
                slot_date,
                slot_time,
                slot_duration,
                venue,
                _id,
                involvedExecs,
              } = res;
              return (
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {name}
                    </th>
                    <td class="px-6 py-4">{title}</td>
                    <td class="px-6 py-4">
                      {moment(slot_date).format("MMMM Do YYYY ")}
                    </td>
                    <td class="px-6 py-4">{slot_time}</td>
                    <td class="px-6 py-4">{slot_duration} Hrs</td>
                    <td class="px-6 py-4">{venue}</td>
                    <td class="px-6 py-4">{[...new Set(involvedExecs)].join(",")}</td>
                    <td class="px-6 py-4">
                     
                        <button
                          onClick={() => handleApprove(_id)}
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Approve
                        </button>
                      
                    </td>
                  </tr>
                </tbody>
              );
            })} */}
        </table>
      </div>
    </>
  );
}
