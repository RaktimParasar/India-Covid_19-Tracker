import Countup from "react-countup";
import Chloropeth from "./Chloropeth";
const Map = ({
  data: { active, confirmed, deaths, recovered, lastupdatedtime, statewise },
  stateName,
  handleMouseEnter,
}) => {
  const singleState =
    statewise && statewise.filter((items) => items.state === stateName);

  const stateData =
    singleState &&
    singleState.map((el) => ({
      stateConfirm: el.confirmed,
      stateActive: el.active,
      stateDeaths: el.deaths,
      stateRecovered: el.recovered,
      stateUpdateTime: el.lastupdatedtime,
    }));

  return (
    <div>
      <header className="header--right">
        <h1 className="header--right__title">india map</h1>
        <p className="header--right__description">
          hover over a state for more details
        </p>
      </header>
      {/* <div>
        <section className="boxes">
          <div>
            {confirmed ? (
              <>
                <h3>confirmed</h3>
                <Countup
                  start={0}
                  end={
                    stateName
                      ? Number(stateData[0].stateConfirm)
                      : Number(confirmed)
                  }
                  duration={2.5}
                  separator=","
                />
              </>
            ) : null}
          </div>
          <div>
            {active ? (
              <>
                <h3>active</h3>
                <Countup
                  start={0}
                  end={
                    stateName
                      ? Number(stateData[0].stateActive)
                      : Number(active)
                  }
                  duration={2.5}
                  separator=","
                />
              </>
            ) : null}
          </div>
          <div>
            {recovered ? (
              <>
                <h3>recovered</h3>
                <Countup
                  start={0}
                  end={
                    stateName
                      ? Number(stateData[0].stateRecovered)
                      : Number(recovered)
                  }
                  duration={2.5}
                  separator=","
                />
              </>
            ) : null}
          </div>
          <div>
            {deaths ? (
              <>
                <h3>deceased</h3>
                <Countup
                  start={0}
                  end={
                    stateName
                      ? Number(stateData[0].stateDeaths)
                      : Number(deaths)
                  }
                  duration={2.5}
                  separator=","
                />
              </>
            ) : null}
          </div>
        </section>
        <section className="boxes">
          <h3>{stateName ? stateName : "India"}</h3>
          <div>
            <h3>Last updated</h3>
            <p>{stateName ? stateData[0].stateUpdateTime : lastupdatedtime}</p>
          </div>
        </section>
        <section className="chloropeth">
          <Chloropeth mapData={statewise} handleMouseEnter={handleMouseEnter} />
        </section>
      </div> */}
    </div>
  );
};

export default Map;
