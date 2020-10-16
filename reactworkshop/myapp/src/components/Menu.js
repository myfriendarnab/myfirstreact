import React from "react";
import { NavLink } from "react-router-dom";


function Menu(props) {
  return (
    <ul className="navbar-nav mr-auto">
      {props.menuList.map(
        (item) => (
          <li className="nav-item" key={item.path}>
            {/* using Navlink instead of <a></a> to stop page refresh */}
            <NavLink className="nav-link" to={item.path} exact={true}>
              {item.menuText}
            </NavLink>
          </li>
        ),
        this
      )}
    </ul>
  );
}

export default Menu;
