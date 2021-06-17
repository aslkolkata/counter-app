import React, { Component } from "react";

class CounterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, cval: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.id, this.state.cval);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col-auto">
            <label class="col-sm-2 col-form-label">Id:</label>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
              placeholder="Counter Id"
            />
          </div>
          <div class="col-auto">
            <label class="col-sm-2 col-form-label">Value:</label>
          </div>
          <div class="col">
            <select
              class="custom-select"
              name="cval"
              value={this.state.cval}
              onChange={this.handleChange}
            >
              <option selected value="0">
                Zero
              </option>
              <option value="10">10</option>
              <option value="100">100</option>
            </select>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">
              Add Counter
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CounterForm;
