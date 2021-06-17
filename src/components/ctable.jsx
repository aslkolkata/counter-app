import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = { v: null };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
    this.props.onInput(this.state.v);
  }

  render() {
    return (
      <tr>
        <td>{this.props.counter.id}</td>
        <td>
          <input
            type="text"
            class="form-control-plaintext"
            onInput={() => this.props.onInput()}
            id="counterValue"
            value={this.props.counter.value}
            placeholder={this.props.counter.value}
          ></input>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onClick()}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

class CounterTable extends Component {
  state = {};
  render() {
    return (
      <table class="table table-sm table-dark table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Value</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.counters.map((counter) => (
            <TableRow
              counter={counter}
              onInput={() => this.props.onInput(counter, 88)}
              onClick={() => this.props.onDelete(counter.id)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default CounterTable;
