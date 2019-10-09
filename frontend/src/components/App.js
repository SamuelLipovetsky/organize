import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import ValuesBoard from "./ValuesBoard.js";
import ValuesForm from "./ValuesForm.js";
import Graphs from "./Graphs";
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ValuesBoard></ValuesBoard>
          <ValuesForm></ValuesForm>
          <Graphs></Graphs>
        </Provider>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
