import React, {useState} from 'react';
import './JogoDaVelha.css';

function JogoDaVelha() {
  const emptyBoard = Array (9).fill("");

  const [board, setBoard] = useState(emptyBoard);

  const handleCellClick = (index) => {
    setBoard (board.map((item,itemIndex) => itemIndex === index ? 'x' : item));
  }

  return (
    <main>
      <h1 className="title"> Jogo da velha </h1>

      <div className="board">
        {board.map((item, index) => (
        <div
        key={index}
        className={"cell ${item}"}
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
