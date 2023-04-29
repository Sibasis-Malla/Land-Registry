import React from "react";

import { useState, useCallback, forwardRef, useRef, useEffect } from "react";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

const mapOptions = {
  center: { lat: 53.5582447, lng: 9.647645 },
  zoom: 12,
};

const API_KEY = "AIzaSyA24ewPGYAG9VkRSoQrRqz7G6s5tSq-ESk";

const Map = () => {
  // name price

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const locations = [
  //     {
  //       name: "Location 2",
  //       location: {
  //         lat: lat1,
  //         lng: lng1,
  //       },
  //     },
  //     {
  //       name: "Location 3",
  //       location: {
  //         lat: lat2,
  //         lng: lng2,
  //       },
  //     },
  //     {
  //       name: "Location 4",
  //       location: {
  //         lat: lat3,
  //         lng: lng3,
  //       },
  //     },
  //     {
  //       name: "Location 5",
  //       location: {
  //         lat: lat4,
  //         lng: lng4,
  //       },
  //     },
  //   ];

  //   setLocations(locations);
  //   setFlag(true);
  // };
  const [mapContainer, setMapContainer] = useState(null);
  // console.log(API_KEY);
  return (
    <>
      <div className="b-2 h-[80vh] w-[100vw]">
        <GoogleMapsProvider
          googleMapsAPIKey={API_KEY}
          mapContainer={mapContainer}
          mapOptions={mapOptions}
        >
          <div
            ref={(node) => setMapContainer(node)}
            style={{ height: "80vh" }}
          />
          <Location />
        </GoogleMapsProvider>
      </div>
    </>
  );
};

export default Map;

function Location() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 4 coordinates
  // const [lat1, setLat1] = useState(1);
  // const [lng1, setLng1] = useState(2);
  const [lat2, setLat2] = useState(3);
  const [lng2, setLng2] = useState(4);
  const [lat3, setLat3] = useState(5);
  const [lng3, setLng3] = useState(6);
  const [lat4, setLat4] = useState(7);
  const [lng4, setLng4] = useState(8);

  // net data'
  const [locations, setLocations] = useState([]);

  // flag

  const [flag, setFlag] = useState(false);
  const [lat, setLat] = useState(44.68);
  const [lng, setLng] = useState(-79.43);
  //   const [flat, setFlat] = useState(44.68);
  //   const [flng, setFlng] = useState(-79.43);
  const map = useGoogleMap();
  const markerRef = useRef();
  const markerRef2 = useRef();
  const google = window.google;

  const latitude = (e) => {
    setLat(parseFloat(e.target.value));

    // check();
  };
  const longitude = (e) => {
    setLng(parseFloat(e.target.value));
    // check();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    check();

    //   setFlat(parseFloat(lat));
    //   setFlng(parseFloat(lng));
  };

  const check = () => {
    console.log(markerRef2.current);
    if (!markerRef.current) return;
    if (isNaN(lat) || isNaN(lng)) return;

    markerRef.current.setPosition({ lat, lng });
    // markerRef2.current.setPosition({ 45 , 80});
    map.panTo({ lat, lng });
  };

  useEffect(() => {
    if (!map || markerRef.current) return;
    if (isNaN(lat) || isNaN(lng)) return;

    markerRef.current = new google.maps.Marker({ map });
    markerRef2.current = new google.maps.Marker({ map });
  }, [map]);

  useEffect(() => {
    if (!markerRef.current) return;
    if (isNaN(lat) || isNaN(lng)) return;

    // console.log({ lat, lng });
    markerRef.current.setPosition({ lat, lng });
    map.panTo({ lat, lng });
  }, [map]);

  return (
    // <div className="lat-lng">
    //   <form>
    //     <label>Enter latitude</label>
    //     <input type="number" value={lat} onChange={latitude} step={0.01} />

    //     <label>Enter longitude</label>
    //     <input type="number" value={lng} onChange={longitude} step={0.01} />

    //     <button onClick={handleSubmit}>Find</button>
    //   </form>
    // </div>

    <>
      <div class="mb-6">
        <form>
          <div className="flex">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Enter Name
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border w-[20%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Enter Price
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border w-[20%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div></div>
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter first latitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border w-[20%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lat}
            onChange={(e) => setLat(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter first longitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lng}
            onChange={(e) => setLng(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 2nd latitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lat2}
            onChange={(e) => setLat2(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 2nd longitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lng2}
            onChange={(e) => setLng2(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 3rd latitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lat3}
            onChange={(e) => setLat3(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 3rd longitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lng3}
            onChange={(e) => setLng3(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 4th latitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lat4}
            onChange={(e) => setLat4(parseFloat(e.target.value))}
          />
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter 4th longitude
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={lng4}
            onChange={(e) => setLng4(parseFloat(e.target.value))}
          />
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            for="myfile"
          >
            Upload Image
          </label>
          <input type="file" id="myfile" name="myfile"></input>
          <div
            onClick={handleSubmit}
            className="bg-transparent w-[20%] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </div>
        </form>
        {/* {console.log(coordinates)} */}

        {/* <MapContainer locations={locations} flag={flag} /> */}
      </div>
    </>
  );
}

// // check

// import React from "react";

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// const MapContainer = ({ locations, flag }) => {
//   const mapStyles = {
//     height: "100vh",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: 71.3851,
//     lng: 2.1734,
//   };

//   const normallocations = [
//     {
//       name: "Location 2",
//       location: {
//         lat: 71.3917,
//         lng: 2.1649,
//       },
//     },
//     {
//       name: "Location 3",
//       location: {
//         lat: 71.3773,
//         lng: 20.1585,
//       },
//     },
//     {
//       name: "Location 4",
//       location: {
//         lat: 71.3797,
//         lng: 2.1682,
//       },
//     },
//     {
//       name: "Location 5",
//       location: {
//         lat: 71.4055,
//         lng: 2.1915,
//       },
//     },
//   ];

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyA24ewPGYAG9VkRSoQrRqz7G6s5tSq-ESk">
//       <GoogleMap mapContainerStyle={mapStyles} zoom={5} center={defaultCenter}>
//         {console.log(flag)}
//         {flag ? (
//           <>
//             {normallocations.map((item) => {
//               return <Marker key={item.name} position={item.location} />;
//             })}
//           </>
//         ) : (
//           <>
//             {normallocations.map((item) => {
//               return <Marker key={item.name} position={item.location} />;
//             })}
//           </>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;
