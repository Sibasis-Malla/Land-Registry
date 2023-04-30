import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-around items-center">
        <div className="w-[40vw]">
          <div>
            <h1 className="font-bold font-sans text-4xl">About Terra</h1>
          </div>
          <div className="mt-6">
            <p className="font-medium text-lg font-serif">
              It is the one and only place where you can buy and sell your land
              securely. We provide functionality like selectiong a proper area,
              viewing different lands, selling them with transparency and
              paperless processes.
            </p>
          </div>
        </div>

        <div className="mt-12 shadow-xl shadow-black rounded-12">
          <img
            className="h-96 w-96 object-cover rounded-12	"
            src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1682824885/DALL_E_2023-04-30_08.50.22_-_land_registry_website_c2ibkx.png"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
