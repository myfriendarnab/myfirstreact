import React from "react";
import { ThemeContext } from "../context";
/*
    Example of Wrapper UI component used for layout related work
    function based component for dumb component
    they dont have state but only prop and no lifecycle events
    function have default render() and prop as default arg
    this eg. uses bootstrap's 12 col grid system
    prop.childern -> chilldren element of a component
*/
function Column(props) {
  const colsize = 12 / props.size;
  
  //AppContext: Using Consumer - adding a hook
  const theme = React.useContext(ThemeContext);

  const txtColor = theme==='dark'?'text-light':'text-dark';
  const cls = "col-md-" + colsize + ' ' + txtColor;
  
  //children element represent all children component in wrapper UI
  return <div className={cls}> {props.children} </div>;
}

export default Column;