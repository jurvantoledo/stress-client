import axios from "../../lib/axios";

export const emotionsFetched = (data) => {
  return {
    type: "EMOTIONS_FETCHED",
    payload: data,
  };
};

export const fetchEmotions = () => {
  return async (dispatch, getState) => {
    console.log("action got hit");
    try {
      const response = await axios.get(`/emotion`);
      console.log("response", response.data.userEmos);
      dispatch(emotionsFetched(response.data.userEmos));
    } catch (error) {
      console.log("no response", error);
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };
};
