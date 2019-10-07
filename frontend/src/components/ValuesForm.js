import React, { Component } from "react";
import { connect } from "react-redux";
import { addValues } from "../actions/ValoresActions";
import Popup from "reactjs-popup";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export class ValuesForm extends Component {
  state = {
    title: "",
    description: "",
    value: "",
    pagar_em: "",
    parcelas: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, description, value, pagar_em, parcelas } = this.state;

    const valor = { title, description, value, pagar_em, parcelas };
    this.props.addValues(valor);
    this.setState({
      title: "",
      description: "",
      value: "",
      pagar_em: "",
      parcelas: ""
    });
  };

  render() {
    const { title, description, value, pagar_em, parcelas } = this.state;
    var divStyle = {};
    return (
      <Popup
        style={{ width: "90%" }}
        modal
        trigger={
          <button className=" btn btn-light btn-sm"> adicionar tarefa </button>
        }
      >
        <div className="container content d-flex">
          <div className=" content">
            <div className="form-group form-group-sm" style={divStyle}>
              <form onSubmit={this.onSubmit}>
                <div className="input-group-sm">
                  <label>title</label>
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={this.onChange}
                      className="form-control input-sm"
                    />
                  </div>
                </div>

                <br />
                <div className="input-group-sm">
                  <label>description </label>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    className="form-control input-sm"
                  />
                </div>
                <br />
                <div className="input-group-sm">
                  <label>valor total </label>
                  <input
                    type="text"
                    name="value"
                    value={value}
                    onChange={this.onChange}
                    className="form-control input-sm"
                  />
                </div>
                <div className="input-group-sm">
                  <label>data primeira parcela </label>
                  <input
                    type="date"
                    name="pagar_em"
                    value={pagar_em}
                    onChange={this.onChange}
                    className="form-control input-sm"
                  />
                </div>
                <div className="input-group-sm">
                  <label> numero parcela </label>
                  <input
                    type="number"
                    name="parcelas"
                    value={parcelas}
                    onChange={this.onChange}
                    className="form-control input-sm"
                  />
                </div>
                <br />
                <input
                  type="submit"
                  className="btn-outline-danger btn-secondary btn-sm"
                />
              </form>
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}

export default connect(
  null,
  { addValues }
)(ValuesForm);
