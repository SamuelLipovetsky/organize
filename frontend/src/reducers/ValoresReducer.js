const initialState = {
  valores: []
};

// IMPORTANTE : espaço entre letras=450 ,entre palavras =1050,tempo do ponto =150 da barra 300
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

    default:
      return state;
  }
}
