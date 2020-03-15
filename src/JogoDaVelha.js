import React, { useState, useEffect } from 'react';
import './JogoDaVelha.css';

function JogoDaVelha() {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState ("O");

  const handleCellClick = (index) => {
    if(board[index] !== ""){
      console.log("Posição ocupada");
      return  null;
    }

    setBoard(
      board.map ((item,itemIndex) => itemIndex === index ? currentPlayer : item)
      );
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    const checkWinner = () => {
      const possibleWaysToWin = [
        [board[0],board[1], board[2]],
        [board[3],board[4], board[5]],
        [board[6],board[7], board[8]],

        [board[0],board[3], board[6]],
        [board[1],board[4], board[7]],
        [board[2],board[5], board[8]],

        [board[0],board[4], board[8]],
        [board[2],board[4], board[6]]
      ];
      possibleWaysToWin.forEach(cells => {
        if (cells.every(cell => cell === "O")) console.log ("O venceu!")
        if (cells.every(cell => cell === "X")) console.log ("X venceu!")
      }); }
useEffect(checkWinner, []);
  return (
    <main>
      <h1 className="title"> Jogo da velha </h1>

      <div className="board">
        {board.map((item, index) => (
        <div
        key={index}
        className={ "cell ${item}!" }
        onClick={() => handleCellClick(index)}
        >
        {item}
      </div>
      ))}
      </div>
    </main>

    );
}

export default JogoDaVelha;
