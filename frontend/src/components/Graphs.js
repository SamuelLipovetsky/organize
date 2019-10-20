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
import { TimeSeries, TimeRange } from "pondjs";
import ValueList from "react-timeseries-charts/lib/components/ValueList";
export class Graph extends Component {
  state = {
    mes: "",
    ano: 2019,
    lista: {
      name: "dispesas",
      columns: ["time", "value"],
      points: []
    },
    // this "ganho" in the state is just a fixed value, but when the user is  implemented
    // this value will also be a variable depending on the user atribute
    ganho: 10000
    // restante: 10000
  };
  componentDidMount() {
    this.props.getValues();
  }

  Comparator = (a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  };
  onSubmit = e => {
    this.setState({ mes: e.target.mes.value });
    this.setState({ ano: e.target.ano.value });
    this.setState({ restante: 10000 });

    e.preventDefault();
    var pts = [];
    var pontos = this.props.valores.map(value => {
      var data = new Date(value.pagar_em);
      var mes = Number(data.getMonth());
      var ano = Number(data.getFullYear());
      var control =
        Number(this.state.mes) + 12 * Number(this.state.ano) - (mes + 12 * ano);

      if (control <= value.parcelas && control > 0) {
        // this.setState({ restante: (this.state.restante -= value.value) });
        var parcelas = 0;
        for (var i = 1; i < value.parcelas; i++) {
          parcelas += 2592000000;
          pts.push([Number(data.getTime()) + parcelas, value.value]);
        }
        pts.push([data.getTime(), value.value, ""]);
      }
    });

    var all_points = [];
    console.log(pts);
    pts = pts.sort((a, b) => {
      return a[0] > b[0] ? 1 : -1;
    });

    pts = pts.map(point => {});
    console.log(pts);
    this.setState({
      // this setState filters all the "Valores" and
      // apend them to a list ,called "lista", in the state of this component
      //the state is kinda of arranjed like a timeseries just to be faster later on when ploting the graph
      lista: {
        name: "dispesas",
        columns: ["time", "value", "restante"],

        points: pts
      }
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className=" container form-group form-group-sm d-flex">
            <select
              className="form-control input-sm "
              name="mes"
              value={this.state.mes}
              onChange={this.onChange}
            >
              <option value={1}>janeiro</option>
              <option value={2}>feveireiro</option>
              <option value={3}>março</option>
              <option value={4}>abril</option>
              <option value={5}>maio</option>
              <option value={6}>junho</option>
              <option value={7}>julho</option>
              <option value={8}>agosto</option>
              <option value={9}>setembro</option>
              <option value={10}>outubro</option>
              <option value={11}>novembro</option>
              <option value={12}>dezembro</option>
            </select>
            <input
              className="form-control input-sm"
              name="ano"
              value={this.state.ano}
              type="number"
              onChange={this.onChange}
            ></input>
            <button type="submit"> submit</button>
          </div>
        </form>
        <p>{this.state.mes}</p>
        <p>{this.state.ano}</p>
        <div>
          {/* {this.state.lista.points.map(value => (
            <div>
              <p>{value.}</p>
            </div>
          ))} */}
        </div>
        <div>
          <ChartContainer
            timeRange={
              new TimeRange([
                new Date(this.state.ano, this.state.mes - 1, 0, 0, 0, 0),
                Number(new Date(this.state.ano, this.state.mes, 0, 0, 0, 0))
              ])
            }
          >
            <ChartRow height="200">
              <YAxis
                id="axis1"
                label="R$"
                min={0}
                max={this.state.ganho}
                width="60"
                type="linear"
                format="$,.2f"
              />
              <Charts>
                <LineChart
                  axis="axis1"
                  series={new TimeSeries(this.state.lista)}
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </div>
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
