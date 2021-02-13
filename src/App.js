import { useEffect } from "react";

import Tracker from "./components/Tracker";
import Map from "./components/Map";
import { fetchData } from "./api";

const App = () => {
  useEffect(() => {
    const data = fetchData();
    console.log("data: ", data);
  }, []);

  return (
    <div className="container">
      <Tracker />
      <Map />
    </div>
  );
};

export default App;
