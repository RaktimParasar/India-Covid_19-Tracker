import Countup from "react-countup";

const Map = ({
  data: { active, confirmed, deaths, recovered, lastupdatedtime },
}) => {
  return (
    <div>
      <header>
        <h1>India Map</h1>
        <p>hover over a state for more details</p>
      </header>
      <div>
        <section className="boxes">
          <div>
            {confirmed ? (
              <>
                <h3>confirmed</h3>
                <Countup
                  start={0}
                  end={Number(confirmed)}
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
                  end={Number(active)}
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
                  end={Number(recovered)}
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
                  end={Number(deaths)}
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
        {/* <section>
          <C
        </section> */}
      </div>
    </div>
  );
};

export default Map;
