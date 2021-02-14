import axios from "axios";

const urlData = "https://api.covid19india.org/data.json";
// const urlStates = "https://api.covid19india.org/states_daily.json";

//fetch from urlData
export const fetchData = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(urlData);
    const totalActive = statewise[0].active;
    const totalConfirmed = statewise[0].confirmed;
    const totalDeceased = statewise[0].deaths;
    const totalRecovered = statewise[0].recovered;
    return { totalActive, totalConfirmed, totalDeceased, totalRecovered };
  } catch (err) {
    console.log(err.message);
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
