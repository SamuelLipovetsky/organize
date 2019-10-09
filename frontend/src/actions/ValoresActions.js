import axios from "axios";

export const getValues = () => dispatch => {
  axios.get("/api/cash/").then(res => {
    dispatch({
      type: "GET_VALUES",
      payload: res.data
    });
  });
};

export const addValues = value => dispatch => {
  axios.post("/api/cash/", value).then(res => {
    dispatch({
      type: "ADD_VALUES",
      payload: res.data
    });
  });
};

export const delValues = id => dispatch => {
  axios
    .delete(`/api/cash/${id}`)

    .then(res => {
      dispatch({
        type: "DELETE_VALUES",
        payload: id
      });
    });
};

export const pagarParcelas = value => dispatch => {
  if (value.parcelas_pagas < value.parcelas) {
    value.parcelas_pagas += 1;
  }
  axios.put(`/api/cash/${value.id}/`, value).then(res => {
    dispatch({
      type: "PAGAR_PARCELAS",
      payload: value
    });
  });
};
