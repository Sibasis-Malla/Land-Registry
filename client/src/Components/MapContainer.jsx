// import React from "react";

// import { useState, useCallback, forwardRef, useRef, useEffect } from "react";
// import {
//   GoogleMapsProvider,
//   useGoogleMap,
// } from "@ubilabs/google-maps-react-hooks";

// const mapOptions = {
//   center: { lat: 53.5582447, lng: 9.647645 },
//   zoom: 12,
// };

// const API_KEY = "AIzaSyA24ewPGYAG9VkRSoQrRqz7G6s5tSq-ESk";

// const Map = () => {
//   const [mapContainer, setMapContainer] = useState(null);
//   // console.log(API_KEY);
//   return (
//     <>
//       <div className="b-2 h-[80vh] w-[100vw]">
//         <GoogleMapsProvider
//           googleMapsAPIKey={API_KEY}
//           mapContainer={mapContainer}
//           mapOptions={mapOptions}
//         >
//           <div
//             ref={(node) => setMapContainer(node)}
//             style={{ height: "80vh" }}
//           />
//           <Location />
//         </GoogleMapsProvider>
//       </div>
//     </>
//   );
// };

// export default Map;

// function Location() {
//   const [lat, setLat] = useState(44.68);
//   const [lng, setLng] = useState(-79.43);
//   //   const [flat, setFlat] = useState(44.68);
//   //   const [flng, setFlng] = useState(-79.43);
//   const map = useGoogleMap();
//   const markerRef = useRef();
//   const markerRef2 = useRef();
//   const google = window.google;

//   const latitude = (e) => {
//     setLat(parseFloat(e.target.value));

//     // check();
//   };
//   const longitude = (e) => {
//     setLng(parseFloat(e.target.value));
//     // check();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     check();

//     //   setFlat(parseFloat(lat));
//     //   setFlng(parseFloat(lng));
//   };

//   const check = () => {
//     console.log(markerRef2.current);
//     if (!markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;

//     markerRef.current.setPosition({ lat, lng });
//     // markerRef2.current.setPosition({ 45 , 80});
//     map.panTo({ lat, lng });
//   };

//   useEffect(() => {
//     if (!map || markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;

//     markerRef.current = new google.maps.Marker({ map });
//     markerRef2.current = new google.maps.Marker({ map });
//   }, [map]);

//   useEffect(() => {
//     if (!markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;

//     // console.log({ lat, lng });
//     markerRef.current.setPosition({ lat, lng });
//     map.panTo({ lat, lng });
//   }, [map]);

//   return (
//     <div className="lat-lng">
//       <form>
//         <label>Enter latitude</label>
//         <input type="number" value={lat} onChange={latitude} step={0.01} />

//         <label>Enter longitude</label>
//         <input type="number" value={lng} onChange={longitude} step={0.01} />

//         <button onClick={handleSubmit}>Find</button>
//       </form>
//     </div>
//   );
// }

// // check

import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 71.3851,
    lng: 2.1734,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 71.3954,
        lng: 2.162,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 71.3917,
        lng: 2.1649,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 71.3773,
        lng: 20.1585,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 71.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 71.4055,
        lng: 2.1915,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyA24ewPGYAG9VkRSoQrRqz7G6s5tSq-ESk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
