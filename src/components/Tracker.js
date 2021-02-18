import india from "../assets/india.svg";
import Countup from "react-countup";
import { Doughnut, Line } from "react-chartjs-2";
import Table from "./Table";

const Tracker = ({
  data: { active, confirmed, deaths, recovered, sevenData, statewise },
  handleMouseEnter,
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
      stateUpdateTime: el.lastupdatedtime,
    }));
  //data for Doughnut chart
  const DoughnutData = {
    labels: ["active", "deceased", "recovered"],
    datasets: [
      {
        data: [
          stateName ? stateData[0].stateActive : active,
          stateName ? stateData[0].stateDeaths : deaths,
          stateName ? stateData[0].stateRecovered : recovered,
        ],
        backgroundColor: ["#2563EB", "#9CA3AF", "#10B981"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 1,
        weight: 20,
      },
    ],
  };
  //customize Doughnut chart
  const DoughnutOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
    cutoutPercentage: 80,
    legend: {
      position: "right",
      labels: {
        fontColor: "#111827",
        boxWidth: 20,
      },
    },
  };

  //Line chart
  const LineData = {
    labels: sevenData && sevenData.map(({ date }) => date),
    datasets: [
      {
        label: "Confirmed",
        data:
          sevenData &&
          sevenData
            .map(({ totalConfirmed }) => totalConfirmed)
            .map((el) => Number(el)),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Recovered",
        data:
          sevenData &&
          sevenData
            .map(({ totalRecovered }) => totalRecovered)
            .map((el) => Number(el)),
        fill: false,
        backgroundColor: "rgb(6, 107, 33)",
        borderColor: "rgba(6, 107, 33, 0.5)",
      },
      {
        label: "Deceased",
        data:
          sevenData &&
          sevenData
            .map(({ totalDeceased }) => totalDeceased)
            .map((el) => Number(el)),
        fill: false,
        backgroundColor: "rgb(81, 84, 82)",
        borderColor: "rgba(81, 84, 82, 0.5)",
      },
    ],
  };

  const LineOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 45,
        top: 0,
        bottom: 0,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <header className="header">
        <div className="header__logo__container">
          <img
            className="header__logo"
            src={india}
            alt="India covid 19 tracker logo"
          />
        </div>
        <div className="header__title__container">
          <h1>INDIA COVID-19 Tracker</h1>
          <p className="header__description">
            Let's all pray to make our Earth Covid-19 free soon, Stay Safe and
            do TheLocate.
          </p>
        </div>
      </header>
      <section className="charts">
        <article className="chart__doughnut">
          <Doughnut data={DoughnutData} options={DoughnutOptions} />
          <div className="chart__doughnut__confirmed">
            {confirmed ? (
              <Countup
                className="confirmed__num"
                start={0}
                end={
                  stateName
                    ? Number(stateData[0].stateConfirm)
                    : Number(confirmed)
                }
                duration={2.5}
                separator=","
              />
            ) : (
              ""
            )}
            <p className="confirmed__text">Confirmed</p>
          </div>
          <div className="doughnut__data">
            {confirmed ? (
              <>
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
            ) : (
              ""
            )}
          </div>
        </article>
        <article className="chart__line">
          <div>
            <Line data={LineData} options={LineOptions} />
          </div>
        </article>
      </section>
      <Table tableData={statewise} handleMouseEnter={handleMouseEnter} />
    </div>
  );
};

export default Tracker;
