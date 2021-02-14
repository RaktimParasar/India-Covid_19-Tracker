import india from "../assets/india.svg";
// import Countup from "react-countup";
import { Doughnut } from "react-chartjs-2";

const Tracker = ({ data: { active, confirmed, deaths, recovered } }) => {
  //data for Doughnut chart
  const data = {
    labels: ["recovered", "active", "deaths"],
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
  const option = {
    cutoutPercentage: 80,
    legend: {
      position: "right",
    },
  };

  //Line chart
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
        <Doughnut data={data} options={option} />
        {/* TODO: add nummbers with countup */}
        <div>
          <p>{confirmed}</p>
          <p>confirmed</p>
        </div>
      </div>
      <div>Line chart</div>
    </div>
  );
};

export default Tracker;
