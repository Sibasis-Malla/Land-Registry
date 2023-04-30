// import React from "react";

// import { useState, useCallback, forwardRef, useRef, useEffect } from "react";
// import {
//   GoogleMapsProvider,
// } from "@ubilabs/google-maps-react-hooks";

// const mapOptions = {
//   center: { lat: 53.5582447, lng: 9.647645 },
//   zoom: 12,
// };

// const API_KEY = "AIzaSyA24ewPGYAG9VkRSoQrRqz7G6s5tSq-ESk";

// const Map = () => {
 
//   const [mapContainer, setMapContainer] = useState(null);

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

