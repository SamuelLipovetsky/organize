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

export class Graph extends Component {
  state = {
    mes: "",
    ano: 2019,
    lista: []
  };
  componentDidMount() {
    this.props.getValues();
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      // como saber se o mes escolhido esta antes ou depous do ano
      lista: this.props.valores.filter(value => {
        var data = new Date(value.pagar_em);
        var mes = Number(data.getMonth()) 
        var diferença_anos = (data.getFullYear() - this.state.ano-1) * 12;
        console.log(tempo, diferença_anos, value.parcelas);
        if (diferença_anos>=0 && ) {
          console.log(value);
          return value;
        }
      })
    });
    console.log(this.state.lista);
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
        {this.state.lista.map(value => {
          <p>{value}</p>;
        })}
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
