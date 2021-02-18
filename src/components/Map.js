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
      <div className="boxes--map__container">
        <section className="boxes">
          <div className="box box--red">
            {confirmed ? (
              <>
                <h3>confirmed</h3>
                <p className="box--numbers">
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
                </p>
              </>
            ) : null}
          </div>
          <div className="box box--blue">
            {active ? (
              <>
                <h3>active</h3>
                <p className="box--numbers">
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
                </p>
              </>
            ) : null}
          </div>
          <div className="box box--green">
            {recovered ? (
              <>
                <h3>recovered</h3>
                <p className="box--numbers">
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
                </p>
              </>
            ) : null}
          </div>
          <div className="box box--gray">
            {deaths ? (
              <>
                <h3>deceased</h3>
                <p className="box--numbers">
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
                </p>
              </>
            ) : null}
          </div>
        </section>
        <section className="state">
          <h3 className="state__name">{stateName ? stateName : "India"}</h3>
          <div className="title--right">
            <p>Last updated</p>
            <p className="date--margin">
              {stateName ? stateData[0].stateUpdateTime : lastupdatedtime}
            </p>
          </div>
        </section>
        <Chloropeth mapData={statewise} handleMouseEnter={handleMouseEnter} />
      </div>
    </div>
  );
};

export default Map;
