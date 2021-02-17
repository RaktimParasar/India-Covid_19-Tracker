import React from "react";

import Tracker from "./components/Tracker";
import Map from "./components/Map";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    stateName: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleMouseEnter = async (stateName) => {
    const getstateName = await stateName;
    this.setState({ stateName: getstateName });
  };
  render() {
    const { data, stateName } = this.state;
    return (
      <div className="container">
        <Tracker
          data={data}
          stateName={stateName}
          handleMouseEnter={this.handleMouseEnter}
        />
        {/* <Map
          data={data}
          stateName={stateName}
          handleMouseEnter={this.handleMouseEnter}
        /> */}
      </div>
    );
  }
}

export default App;
