import React from "react";

import Tracker from "./components/Tracker";
import Map from "./components/Map";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleMouseEnter = async (country) => {
    const getCountry = await country;
    this.setState({ country: getCountry });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <Tracker data={data} handleMouseEnter={this.handleMouseEnter} />
        <Map data={data} country={country} />
      </div>
    );
  }
}

export default App;
