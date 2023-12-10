import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

const Board = ({ tiles, onTitleClick, playerTurn,strikeclass }) => {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(2)}
        value={tiles[2]}
        className=" bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(5)}
        value={tiles[5]}
        className=" bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(6)}
        value={tiles[6]}
        className="right-border "
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(7)}
        value={tiles[7]}
        className="right-border "
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTitleClick(8)}
        value={tiles[8]}
      />
      <Strike  strikeclass={strikeclass} />
    </div>
  );
};

export default Board;
