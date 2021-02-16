import Countup from "react-countup";
import Chloropeth from "./Chloropeth";
const Map = ({
  data: { active, confirmed, deaths, recovered, lastupdatedtime, statewise },
  stateName,
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
    }));

  return (
    <div>
      <header>
        <h1>India Map</h1>
        <p>hover over a state for more details</p>
      </header>
      <div>
        <div>{stateName ? <p>{stateData[0].stateActive}</p> : null}</div>
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
          <h3>India</h3>
          <div>
            <h3>Last updated</h3>
            <p>{lastupdatedtime}</p>
          </div>
        </section>
        <section className="chloropeth">
          {/* <Chloropeth mapData={statewise} /> */}
        </section>
      </div>
    </div>
  );
};

export default Map;
