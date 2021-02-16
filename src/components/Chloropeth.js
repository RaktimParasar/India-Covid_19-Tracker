import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import LinearGradient from "./LinearGradient.js";
import { scaleQuantile } from "d3-scale";

const INDIA_TOPO_JSON = require("../helper/india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};

const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

const Chloropeth = ({ mapData, handleMouseEnter }) => {
  const modifiedData =
    mapData &&
    mapData.slice(1).map((item) => ({
      id: item.statecode,
      state: item.state,
      value: Number(item.confirmed),
    }));

  const [tooltipContent, setTooltipContent] = useState("");

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max:
      modifiedData &&
      modifiedData.reduce(
        (max, item) => (item.value > max ? item.value : max),
        0
      ),
  };

  const colorScale =
    modifiedData &&
    scaleQuantile()
      .domain(modifiedData && modifiedData.map((el) => el.value))
      .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      handleMouseEnter(geo.properties.name);
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    handleMouseEnter();
    setTooltipContent("");
  };
  return (
    <div className="map">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // console.log(geo.properties.name);
              const current =
                modifiedData && modifiedData.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />
    </div>
  );
};

export default Chloropeth;
