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
  "#EFF6FF",
  "#DBEAFE",
  "#BFDBFE",
  "#93C5FD",
  "#60A5FA",
  "#3B82F6",
  "#2563EB",
  "#1D4ED8",
  "#1E40AF",
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
    <section className="map">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={220}
        height={190}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
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
    </section>
  );
};

export default Chloropeth;
