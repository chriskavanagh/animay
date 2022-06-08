//import { useGeolocated } from "react-geolocated";
import React from "react";

const Location = () => {
  const [long, setLong] = React.useState(0);
  const [lat, setLat] = React.useState(0);
  const [err, setErr] = React.useState(null);

  function success(pos) {
    //let crd = pos.coords;
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
      {err ? <h3>Error {err}</h3> : null}

      <h2>Long: {long}</h2>
      <h2>Lat: {lat}</h2>
    </main>
  );
};

/* const Location = () => {
  const [long, setLong] = React.useState(0);
  const [lat, setLat] = React.useState(0);
  const [err, setErr] = React.useState(null);

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    let crd = pos.coords;
    setLat(crd.latitude);
    setLong(crd.longitude);
  }

  function error(err) {
    setErr(err.message);
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  });

  return (
    <main>
      {err ? <h3>Error {err}</h3> : null}

      <div>Long: {long}</div>
      <div>Lat: {lat}</div>
    </main>
  );
}; */

export default Location;
