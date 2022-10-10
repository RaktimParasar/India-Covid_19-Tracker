import React from "react";

import Tracker from "./components/Tracker";
import Map from "./components/Map";
import Loading from "./components/Loading";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    stateName: "",
    isLoading: true,
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ isLoading: false });
    this.setState({ data });
  }

  handleMouseEnter = async (stateName) => {
    const getstateName = await stateName;
    this.setState({ stateName: getstateName });
  };
  render() {
    const { data, stateName, isLoading } = this.state;

    return (
      <>
        {!isLoading ? (
          <>
            <div className="container">
              <Tracker
                data={data}
                stateName={stateName}
                handleMouseEnter={this.handleMouseEnter}
              />
              <Map
                data={data}
                stateName={stateName}
                handleMouseEnter={this.handleMouseEnter}
              />
            </div>
            <footer>
              <p>
                Made by{" "}
                <a
                  className="link"
                  href="http://raktimparasar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raktim Parasar
                </a>
              </p>
            </footer>
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default App;
