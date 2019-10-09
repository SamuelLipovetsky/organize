import { ValueBoard } from "../components/ValuesBoard";

const initialState = {
  valores: []
};

export default function(state = initialState, action, dispatch) {
  switch (action.type) {
    case "GET_VALUES":
      return {
        ...state,
        valores: action.payload
      };
    case "ADD_VALUES":
      return {
        ...state,
        valores: [...state.valores, action.payload]
      };
    case "DELETE_VALUES":
      return {
        ...state,
        valores: state.valores.filter(ts => ts.id !== action.payload)
      };
    case "PAGAR_PARCELAS":
      return {
        ...state,
        valores: [
          ...state.valores.filter(ts => ts.id !== action.payload.id),
          action.payload
        ]
      };

    default:
      return state;
  }
}
