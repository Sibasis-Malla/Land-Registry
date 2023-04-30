import React, { useState,useContext } from "react";
import Navbar from "../Components/Navbar";
import client from "../utils/ipfs";
import { addLand } from "../contexts/useContract/writeContract";
import Web3Context from "../contexts";

const AddLand = () => {
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [Image, setImage] = useState("");
  const {Contract,account}=useContext(Web3Context)

    //handlers for form Data
  const handleName = (event) => {
    setname(() => ([event.target.name] = event.target.value));
  };
  const handlePrice = (event) => {
    setPrice(() => ([event.target.name] = event.target.value));
  };
  const handleLongitude = (event) => {
    setLongitude(() => ([event.target.name] = event.target.value));
  };
  const handleLatitude = (event) => {
    setLatitude(() => ([event.target.name] = event.target.value));
  };
  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };
  const handleData = async (res) => {
     
    const obj = {
    
      name:name,
      description:"This a NFT Warranty and Proof of Ownership of the following product",
      image: res,
      attributes: [
        {
             
            "trait_type": "Longitude", 
            "value":longitude

        },
        {
          "trait_type": "Latitude", 
          "value":latitude
        }
      ],
    };

    const result = await client.add(JSON.stringify(obj));
    const str = 'ipfs://';
    const finalResult = str.concat(String(result.path));
    // console.log(result)
  //  console.log(finalResult);
  alert('NFT Data added');
  await addLand(Contract,account.currentAccount,name,price,finalResult,longitude,latitude,res)
  //  await createNFT(Contract,finalResult,sellerI,productId,customer.toLowerCase(),expiry,res,account.currentAccount);
    alert('NFT created')
    setTimeout(function () {
      window.location.href = `/Dashboard`;
    }, 4000);
  
    
  };
  const UploadImage = async (e) => {
    //let uri="" ;
   // console.log(Coverimage)
   e.preventDefault()
      const data = new FormData();
      data.append('file', Image);
      data.append('upload_preset', 'mystiq');
      data.append('cloud_name', 'doybtqm8h');
      await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
        method: 'post',
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const res = data.url
          // setCoverImageURI(res);
          // console.log(res)
         // uri = data.url
          //console.log('Image Uploaded')
          alert("Image Uploaded");
           handleData(res)
         
        
        })
        .catch((err) => console.log(err));
    };
  
  const handleSubmit = (e) => {
   
  };
  return (
    <>
    <Navbar></Navbar>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <form>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              onChange={handleName}
              type="text"
              name="name"
              id="name"
              placeholder="Land Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="price"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Price
            </label>
            <input
              onChange={handlePrice}
              type="Number"
              name="price"
              id="price"
              placeholder="Enter base Price"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="longitude"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Longitude
            </label>
            <input
              onChange={handleLongitude}
              type="text"
              name="Longitude"
              id="Longitude"
              placeholder="Enter Longitude"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="latitude"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Latitude
            </label>
            <input
              onChange={handleLatitude}
              type="text"
              name="Latitude"
              id="Latitude"
              placeholder="Enter Latitude"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="Image"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             Image
            </label>
            <input
              onChange={handleImage}
              type="file"
              name="Image"
              id="Image"
              placeholder="Enter Latitude"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
               <button
              onClick={UploadImage}
              class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Upload Image
            </button>
          </div>
          

    
        </form>
      </div>
    </div>
    </>
  );
};

export default AddLand;
