import axios from "axios";

const urlData = "https://api.covid19india.org/data.json";
// const urlStates = "https://api.covid19india.org/states_daily.json";

//fetch from urlData
export const fetchData = async () => {
  try {
    const {
      data: { statewise, cases_time_series },
    } = await axios.get(urlData);
    const { active, confirmed, deaths, recovered } = statewise[0];

    const lastSevenDays = cases_time_series.map((data) => ({
      totalConfirmed: data.totalconfirmed,
      totalDeceased: data.totaldeceased,
      totalRecovered: data.totalrecovered,
      date: data.date,
    }));

    const arrLength = cases_time_series.length;
    const sevenData = lastSevenDays.slice(arrLength - 7, arrLength);

    return {
      active,
      confirmed,
      deaths,
      recovered,
      sevenData,
      statewise,
    };
  } catch (error) {
    console.log(error);
  }
};

//fetch from urlTable Data
export const fetchTabel = async () => {
  try {
    const response = await axios.get(urlData);

    return response;
  } catch (err) {
    console.log(err.message);
  }
};
