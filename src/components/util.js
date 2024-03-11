import axios from "axios";

export const utilToday = () => {
  const today = new Date();
  return `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
};

export const AxiosCall = async (_url, _method, _params) => {
  const state = {
    data: {},
    error: "",
  };

  await axios({ url: _url, method: _method, params: _params })
    .then((resp) => {
      console.log(resp.data);
      state.data = resp.data;
    })
    .catch((e) => {
      console.error("Error fetching movies:", e);
      state.error = e.message;
    });

  console.log("state : ", state);
  return state;
};
