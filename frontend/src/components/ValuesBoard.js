import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues } from "../actions/ValoresActions";

export class ValueBoard extends Component {
  componentDidMount() {
    this.props.getValues();
  }
  parcelasRestantes = value => {
    var parcelasRestantes = value.parcelas - value.parcelas_pagas;
    return parcelasRestantes + "/" + value.parcelas;
  };
  render() {
    return (
      <div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">valor</th>
                <th scope="col">Parcelas </th>
                <th scope="col">pagar até</th>
              </tr>
            </thead>
            {this.props.valores.map(value => (
              <tbody>
                <tr>
                  <td>{value.title}</td>
                  <td>{value.description}</td>
                  <td>{value.value}</td>
                  <td>{value.parcelas_pagas + "/" + value.parcelas}</td>
                </tr>
              </tbody>
            ))}
          </table>
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
)(ValueBoard);
