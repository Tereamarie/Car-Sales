import React from "react";

export default function AddedFeature(props) {
  return (
    <li>
      <button onClick={() => props.removeFeature(props.id)} className="button">
       Remove Item
      </button>
      {props.name}
    </li>
  );
}

