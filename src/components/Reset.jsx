import React from "react";
import GameState from "./GameState";

const Reset = ({ gamestate, onReset }) => {
  if (gamestate === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Reset
    </button>
  );
};

export default Reset;
