import india from "../assets/india.svg";
// import Countup from "react-countup";
import { Doughnut, Line } from "react-chartjs-2";
import Table from "./Table";

const Tracker = ({
  data: { active, confirmed, deaths, recovered, sevenData, statewise },
  handleMouseEnter,
}) => {
  //data for Doughnut chart
  const DoughnutData = {
    labels: [`recovered ${recovered}`, `active ${active}`, `deaths ${deaths}`],
    datasets: [
      {
        label: "# of Votes",
        data: [recovered, active, deaths],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //customize Doughnut chart
  const DoughnutOptions = {
    cutoutPercentage: 80,
    legend: {
      position: "right",
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

  // const LineOptions = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <div>
      <header className="header">
        <div>
          <img
            className="header__logo"
            src={india}
            alt="India covid 19 tracker logo"
          />
        </div>
        <div>
          <h1>India Covid 19 Tracker</h1>
          <p>
            Let's all pray to make our Earth Covid-19 free soon, Stay Safe and
            do TheLocate
          </p>
        </div>
      </header>
      <div className="chart-container">
        <Doughnut data={DoughnutData} options={DoughnutOptions} />
        {/* TODO: add nummbers with countup */}
        <div>
          <p>{confirmed}</p>
          <p>confirmed</p>
        </div>
      </div>
      <div>
        <Line data={LineData} />
        {/* {TODO: style changes} */}
      </div>
      <Table tableData={statewise} handleMouseEnter={handleMouseEnter} />
    </div>
  );
};

export default Tracker;
