import React from "react";
import NestedDemo from "./NestedDemo";

class PureComponentDemo extends React.PureComponent {
//class PureComponentDemo extends React.Component {
//read: https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation
  state = { no: 0, count: 0 };

  /*
    Use shouldComponentUpdate should not be used with PureComponents
    In case one wants to control the rendering exclusively, it should be used
    In that case, React.Component should be used
    React.PureComponent -> calls shouldComponentUpdate() internally with its default implimentation
   */
//   shouldComponentUpdate(nextProps,nextState){
//       console.log("UPDATE EVENT", nextProps,nextState);
//       return nextState.count%3===0 || this.state.no !== nextState.no;
//   }

  render() {
    const name = "arnab";
    console.log("RENDER CALLED", this.state);
    return (
      <div id="demo">
        <h1>PureComponent Demo</h1>
        {this.state.count % 3 === 0 ? <p>Hello from {name}</p> : null}
        {/* <NestedDemo /> */}
        <button onClick={() => this.setState({ no: 0 })}>Change to 0</button>
        <button onClick={() => this.setState({ no: 1 })}>Change to 1</button>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default PureComponentDemo;
