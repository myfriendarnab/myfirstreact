import React from "react";

//appContext example - v16.8
//react-hook(v16.8) -> facility of hooking a functionality of a class based component to functional component
//  let [stateVariable,setState] = React.useState('int val of state')
//  useEffect hook -> hook for lifecycle events ... mounting, updating, unmounting; for all useEffect is used
//theme switch is to switch themes and a dumb component
function ThemeSwitch(prop) {
  let [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    console.log("EFFECT called");
    document.body.className = "bg-" + theme;
  });

  if (theme === "light") {
    return (
      <button
        onClick={() => {
          setTheme("dark");
          prop.changeTheme("dark");
        }}
      >
        Dark
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setTheme("light");
        prop.changeTheme("light");
      }}
    >
      Light
    </button>
  );
}

export default ThemeSwitch;
