import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Decrement() {
    this.setState({ count: this.state.count + 1 });
  }

  Increment() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Decrement}> Like -</button>
        <button onClick={this.Increment}> Like +</button>
      </div>
    );
  }
}
export default ClassCounter;
