import india from "../assets/india.svg";
import { Doughnut, Line, Chart } from "react-chartjs-2";
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
    labels: [
      `active: ${stateName ? stateData[0].stateActive : active}`,
      `deceased: ${stateName ? stateData[0].stateDeaths : deaths}`,
      `recovered: ${stateName ? stateData[0].stateRecovered : recovered}`,
    ],
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
      },
    ],
    text: `${stateName ? stateData[0].stateConfirm : confirmed}`,
  };
  Chart.pluginService.register({
    id: "p1",
    beforeDraw: function (chart) {
      var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

      ctx.restore();
      ctx.font = "15px archiaregular";
      ctx.textAlign = "center";

      var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2 - 50),
        textY = height / 2;
      var Nametext = "Confirmed",
        textA = Math.round((width - ctx.measureText(Nametext).width) / 4 + 10),
        textB = height / 2 + 20;

      ctx.fillText(text, textX, textY);
      ctx.fillText(Nametext, textA, textB);

      ctx.save();
    },
  });
  //customize Doughnut chart
  const DoughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    cutoutPercentage: 85,
    legend: {
      position: "right",
      labels: {
        fontColor: "#111827",
        boxWidth: 20,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return data.labels[tooltipItems.index];
        },
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
        left: 20,
        right: 10,
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
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      p1: false,
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
        </article>
        <article className="chart__line">
          <Line data={LineData} options={LineOptions} />
        </article>
      </section>
      <Table tableData={statewise} handleMouseEnter={handleMouseEnter} />
    </div>
  );
};

export default Tracker;
