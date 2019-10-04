import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues } from "../actions/ValoresActions";

export class ValueBoard extends Component {
  componentDidMount() {
    this.props.getValues();
  }

  render() {
    return (
      <div>
        {this.props.valores.map(value => (
          <div>
            <div>{value.tittle}</div>
            <div>{value.description}</div>
            <div>{value.value}</div>
            <div>{value.pagar_em}</div>
            <div>{value.parcelas}</div>
          </div>
        ))}
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
