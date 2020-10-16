import React from "react";
import Menu from "../Menu";
// import axios from "axios";
import { ROUTES } from "../../routes";

class Header extends React.Component {

  state = { menuList: []}; //ALWAYS initialize the state

  componentDidMount() {
    // axios
    // .get("/menu.json")
    // .then((res) => {
    //   this.setState({ menuList: res.data });
    // })
    // .catch((err) => {
    //   console.log("error", err);
    // });

    this.setState({ menuList: ROUTES });
  }

  render() {
      console.log(this.state.menuList);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu
            menuList={this.state.menuList}
            activeMenu={this.state.activeMenu}
          />
          {/* All enclosing components */}
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export default Header;
