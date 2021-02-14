import axios from "axios";

const urlData = "https://api.covid19india.org/data.json";
// const urlStates = "https://api.covid19india.org/states_daily.json";

//fetch from urlData
export const fetchData = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(urlData);
    const { active, confirmed, deaths, recovered } = statewise[0];

    return {
      active,
      confirmed,
      deaths,
      recovered,
    };
  } catch (error) {
    console.log(error);
  }
};

//fetch from urlState
// export const fetchStates = async () => {
//   try {
//     const response = await axios.get(urlData);

//     return response;
//   } catch (err) {
//     console.log(err.message);
//   }
// };
