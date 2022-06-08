//import { useGeolocated } from "react-geolocated";
import React from "react";

const Location = () => {
  const [long, setLong] = React.useState(0);
  const [lat, setLat] = React.useState(0);
  const [err, setErr] = React.useState(null);

  function success(pos) {
    setLat(pos.coords.latitude);
    setLong(pos.coords.longitude);
  }

  function error(err) {
    setErr(err.message);
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  });

  return (
    <main>
      {err ? (
        <h3>Error {err}</h3>
      ) : (
        <div>
          <h2>Long: {long}</h2>
          <h2>Lat: {lat}</h2>
        </div>
      )}
    </main>
  );
};

export default Location;
