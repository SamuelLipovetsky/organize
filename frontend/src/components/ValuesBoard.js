import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues, delValues, pagarParcelas } from "../actions/ValoresActions";

export class ValueBoard extends Component {
  componentDidMount() {
    this.props.getValues();
  }
  parcelasRestantes = value => {};
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
              <tbody key={value.id}>
                <tr>
                  <td>{value.title}</td>
                  <td>{value.description}</td>
                  <td>{value.value}</td>
                  <td>
                    {value.parcelas_pagas + "/" + value.parcelas}{" "}
                    <button onClick={() => this.props.pagarParcelas(value)}>
                      +{" "}
                    </button>
                  </td>
                  <td>{value.pagar_em}</td>
                  <td>
                    <button onClick={() => this.props.delValues(value.id)}>
                      X
                    </button>
                  </td>
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
  { getValues, delValues, pagarParcelas }
)(ValueBoard);
