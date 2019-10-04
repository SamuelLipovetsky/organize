import axios from "axios";

export const getValues = () => dispatch => {
  axios.get("/api/cash/").then(res => {
    dispatch({
      type: "GET_VALUES",
      payload: res.data
    });
  });
};

export const addValues = tasks => dispatch => {
  axios.post("/api/cash/", tasks).then(res => {
    console.log(res.data);
    dispatch({
      type: "ADDVALUES",
      payload: res.data
    });
  });
};

export const delValues = id => dispatch => {
  axios
    .delete(`/api/cash/${id}`)

    .then(res => {
      dispatch({
        type: "DELETEVALUES",
        payload: id
      });
    });
};
