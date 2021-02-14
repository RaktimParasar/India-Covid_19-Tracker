import React from "react";

import Tracker from "./components/Tracker";
import Map from "./components/Map";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
    console.log(data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Tracker data={data} />
        <Map />
      </div>
    );
  }
}

export default App;
