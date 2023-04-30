import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Web3Context from "../contexts";
import { getLand } from "../contexts/useContract/readContract";
import { request } from "../contexts/useContract/writeContract";

export default function Preview() {
  const { id } = useParams();
  const { Contract, account } = useContext(Web3Context);
  const [land, setLand] = useState();
  const [bid, setBid] = useState();
  const handlePrice = (event) => {
    setBid(() => ([event.target.name] = event.target.value));
  };
  useEffect(() => {
    getLand(Contract, id).then((data) => {
      // console.log(data.Owners)
      setLand(data);
    });
  }, [Contract]);
  const handleSubmit = async (event) => {
    request(Contract, land.id, bid, account.currentAccount).then((data) => {
      alert("Bid submitted waiting For Approval");
    });
  };
  return (
    <>
      <Navbar />
      <div className="w-[100vw]  bg-new-secondary flex overflow-hidden 	">
        <div className="w-full mt-16 h-full bg-new-secondary flex flex-col justify-center items-center">
          <div className="w-1/2 h-4/6 flex justify-center items-center flex-col bg-secondary-3 rounded-lg border-2 border-black shadow-xl shadow-black">
            <div className="text-2xl mt-4 font-bold font-mono">
              {land && land.name}
            </div>
            <div className="flex flex-col justify-center items-center w-full h-3/4">
              <img
                className="px-8 py-4 rounded-t-lg h-[45vh] w-[90%]"
                src={land && land.imageURI}
              />
              <div className="flex flex-col justify-end  mt-4 px-4">
                  <div className="flex justify-center items-center">
                    <div>
                      <span className="text-l mt-4 font-bold font-mono">
                        Longitude:
                      </span>{" "}
                    </div>
                    <div>{land && land.long}</div>
                  </div>
                <div className="flex justify-end items-end px-12">
                  <div>
                    <span className="text-l font-bold font-mono  ">
                      Latitude:
                    </span>{" "}
                  </div>
                  <div>{land && land.lat}</div>
                </div>

                <span className="w-full text-xl ">
                  <span className="text-l font-bold font-mono">
                    Current Owner:
                  </span>{" "}
                  {`${String(land && land.CurrentOwner).slice(0, 5)}...${String(
                    land && land.CurrentOwner
                  ).slice(String(land && land.CurrentOwner).length - 5)}`}
                </span>
                <span className="w-full text-xl text-left">
                  <span className="text-l font-bold font-mono">Price:</span>
                  {land && land.currPrice} TerraTokens
                </span>
              </div>
            </div>
            {1 && (
              <a
                href={`https://testnets.opensea.io/assets/mumbai/0x89b6f823a5059be4cf6771bd73ee917964a961d9/${
                  land && land.id
                }`}
                className="text-right mt-5 cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                See at OpenSea
              </a>
            )}
          </div>
          {account && account.currentAccount != land && land.CurrentOwner ? (
            <>
              {" "}
              <h1 className="m-8">Interested in Buying ?</h1>
              <input
                onChange={handlePrice}
                type="Number"
                name="price"
                id="price"
                placeholder="Place Bid"
                class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />{" "}
              <div>
                <button
                  onClick={handleSubmit}
                  class="hover:shadow-form w-full my-4 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Place Bid
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
