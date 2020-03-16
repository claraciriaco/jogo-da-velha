import React, { useState, useEffect } from 'react';
import './JogoDaVelha.css';

function JogoDaVelha() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);

  const [currentPlayer, setCurrentPlayer] = useState ("O");
  const [winner, setWinner] = useState (null);
  
  const handleCellClick = (index) => {
    if(winner){
      console.log("Jogo Finalizado");
      return  null;
    }

    if(board[index] !== ""){
      console.log("Posição ocupada");
      return  null;
    }

    setBoard(
      board.map ((item, itemIndex) =>  itemIndex === index ? currentPlayer : item)
      );
    
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
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
      if (cells.every(cell => cell === "O")) setWinner ("O")
      if (cells.every(cell => cell === "X")) setWinner ("X")
      });

    checkDraw();
  }

  const checkDraw = () => {
    if (board.every(item => item !== "")){
      //quando o jogo empata
      setWinner ("E");
    }}


  useEffect(checkWinner, [board]);
  
  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <main>
      <h1 className="title"> Jogo da velha </h1>

      <div className={'board ${winner ? "game-over":""}'}>
        {board.map((item, index) => (
        <div
          key={index}
          className={ "cell"+[item] }
          onClick={() => handleCellClick(index)}
          >
            {item}
        </div>
        ))}
      </div>
      
      <footer>
        {winner &&
          <h2 className="winner-message">
            <span className={winner}>{winner}</span> Ganhou!
          </h2>}
          <br/>
        <button onClick={resetGame}>Recomeçar Jogo!</button>
      </footer>

    </main>
  );
}

export default JogoDaVelha;
