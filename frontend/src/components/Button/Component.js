import React from "react";

export function Button(props) {
  if (props.href !== undefined) {
    return (
      <button type="button" className="">
        <a href={props.href}>{props.text}</a>
      </button>
    );
  } else return <button onClick={props.onClick}>{props.text}</button>;
}

