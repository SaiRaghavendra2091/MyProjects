import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //   Counter = () =>  {
  //     this.state.count = this.state.count + 1
  //     // console.log(this.state.count);
  //   }

  IncrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  DecrementCounter = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  IncrementCounterToFiveTimes = () => {
    this.setState({
      count: this.state.count + 5,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <p style={{ fontSize: "20em" }}>{count}</p>
        <button className="btn btn-success" onClick={this.IncrementCounter}>
          IncrementCounter
        </button>
        <button
          className="btn btn-danger"
          onClick={this.DecrementCounter}
          style={{ margin: "10px" }}
        >
          DecrementCounter
        </button>
        <div>
          <button
            className="btn btn-primary"
            onClick={this.IncrementCounterToFiveTimes}
          >
            {" "}
            IncrementCounter to 5{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
