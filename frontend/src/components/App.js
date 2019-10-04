import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import ValuesBoard from "./ValuesBoard.js";
import ValuesForm from "./ValuesForm.js";
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <p>hello word</p>
          <ValuesBoard></ValuesBoard>
          <ValuesForm></ValuesForm>
        </Provider>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
