import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import CounterTable from "./components/ctable";
import CounterForm from "./components/cform";

class App extends Component {
  state = {
    counters: [
      { id: 1111, value: 0 },
      { id: 2222, value: 0 },
      { id: 3333, value: 0 },
      { id: 4444, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleInput = (counter, value) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value = value;
    this.setState({ counters });
  };

  handleSubmit = (id, value) => {
    const counters = this.state.counters;
    counters.push({ id: id, value: value });
    this.setState({ counters });
    alert("Counter Added: " + id + "-" + value);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <CounterForm onSubmit={this.handleSubmit} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
        <CounterTable
          counters={this.state.counters.filter((c) => c.value !== 0)}
          onInput={this.handleInput}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
