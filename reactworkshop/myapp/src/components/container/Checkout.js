import React from "react";
//Demo of Controlled component(default) vs UnControlled component
class Checkout extends React.Component {
  state = { name: "", email: "" };

  saveData(evt) {
    evt.preventDefault();
    console.log("form submitted", this.state);
  }

  render() {
    return (
      <form onSubmit={(evt) => this.saveData(evt)}>
        <label>Name</label>
        {/* // CONTROLLED COMPONENT */}
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button>Submit</button>
        <label>Email</label>
        {/* UNCONTROLLED 
        ref -> vdom -> dom -> getelementById()
        ref gives u the actual instance of DOM and not cloned instance from VDOM
        https://reactjs.org/docs/uncontrolled-components.html#gatsby-focus-wrapper
        */}
        <input
          type="text"
          ref={(r) => (this.emailref = r)}
          onChange={(e) => this.setState({ email: e.target.value })}
          />
          {this.emailRef&&this.emailRef.value === "" ? <span>Email is required</span> : null}
      </form>
    );
  }
}

export default Checkout;
