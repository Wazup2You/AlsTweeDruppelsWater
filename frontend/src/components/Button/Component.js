import React from "react";

export function Button(props) {
  // button for quiz checks if its clicked
  // and changes color after it is clicked
  const [clicked, setClicked] = React.useState(false);

  function clickSwitch() {
    setClicked(true);
    props.onClick();
  }

  const classes =
    "bg-blue-oasen w-60 h-20 m-4 hover:bg-blue-500 text-white font-bold rounded";

  // check if the button is regular button with a link or a button for the quiz
  if (props.href !== undefined) {
    return (
      <button type="button" className={classes}>
        <a href={props.href}>{props.text}</a>
      </button>
    );
  } else {
    return (
      <button
        className={`w-60 h-20 m-4 text-white font-bold rounded ${
          props.scene === 4 && clicked && props.color !== undefined
            ? `bg-${props.color}-500`
            : "bg-blue-oasen"
        }`}
        onClick={clickSwitch}
      >
        {props.text}
      </button>
    );
  }
}
