import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues } from "../actions/ValoresActions";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart
} from "react-timeseries-charts";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
export class Graph extends Component {
  state = {
    mes: "",
    ano: ""
  };
  componentDidMount() {
    this.props.getValues();
  }

  render() {
    return (
      <div>
        <DateTime
          className="input-group-lg"
          timeFormat={false}
          defaultValue={new Date()}
          viewMode="months"
          onChange={this.onMax_time}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  valores: state.ValoresReducer.valores
});
export default connect(
  mapStateToProps,
  { getValues }
)(Graph);
