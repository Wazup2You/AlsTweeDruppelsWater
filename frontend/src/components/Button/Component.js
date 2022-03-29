import React from "react";

export function Button(props) {
  const classes = "bg-blue-oasen w-60 h-20 m-4 hover:bg-blue-500 text-white font-bold rounded"
  if (props.href !== undefined) {
    return (
<<<<<<< HEAD
      <button type="button" className="">
=======

      <button type="button" className={classes}>
>>>>>>> d3377a029059aef44d8fd8616900c29b5b631090
        <a href={props.href}>{props.text}</a>
      </button>

    );
  } else return <button className={classes} onClick={props.onClick}>{props.text}</button>;
}

