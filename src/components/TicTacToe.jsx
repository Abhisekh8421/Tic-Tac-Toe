import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningcombinations = [
  //rows
  { combo: [0, 1, 2], strikeclass: "strike-row-1" },
  { combo: [3, 4, 5], strikeclass: "strike-row-2" },
  { combo: [6, 7, 8], strikeclass: "strike-row-3" },
  //columns
  { combo: [0, 3, 6], strikeclass: "strike-column-1" },
  { combo: [1, 4, 7], strikeclass: "strike-column-2" },
  { combo: [2, 5, 8], strikeclass: "strike-column-3" },

  //diagonal
  { combo: [0, 4, 8], strikeclass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeclass: "strike-diagonal-2" },
];

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeclass, setstrikeclass] = useState();
  const [gamestate, setgamestate] = useState(GameState.inProgress);

  const checkwinner = (tiles, setstrikeclass, setgamestate) => {
    for (const { combo, strikeclass } of winningcombinations) {
      const tilev1 = tiles[combo[0]];
      const tilev2 = tiles[combo[1]];
      const tilev3 = tiles[combo[2]];
      if (tilev1 !== null && tilev1 == tilev2 && tilev1 == tilev3) {
        setstrikeclass(strikeclass);
        if (tilev1 == PLAYER_X) {
          setgamestate(GameState.playerXWins);
        } else {
          setgamestate(GameState.playerYWins);
        }
        return;
      }
    }
    const areAlltiles = tiles.every((tile) => tile !== null);
    if (areAlltiles) {
      setgamestate(GameState.draw);
    }
  };
  const handleReset = () => {
    setgamestate(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setstrikeclass(null);
  };

  useEffect(() => {
    checkwinner(tiles, setstrikeclass, setgamestate);
  }, [tiles]);

  const handleTileclick = (index) => {
    if (gamestate !== GameState.inProgress) {
      return;
    }
    if (tiles[index] != null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn == PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };
  return (
    <div>
      <h1>
        Tic Tac <span style={{ color: "#1B4242" }}>Toe</span>
      </h1>
      <Board
        tiles={tiles}
        playerTurn={playerTurn}
        onTitleClick={handleTileclick}
        strikeclass={strikeclass}
      />
      <GameOver gamestate={gamestate} />
      <Reset gamestate={gamestate} onReset={handleReset} />
    </div>
  );
};

export default TicTacToe;
