import React from "react";
import Square from "./Square";


function App() {
  const [squareElements, setSquareElements] = React.useState([])

  for (let i = 0; i < 10; i++) {
    setSquareElements(prevSquares => {
      prevSquares[i] =
        <Square
          key={Math.random()}
          index={i}
          number={Math.ceil(Math.random() * 9)}
          clicked={true}
        />
    })

  }

  function rollSquares() {

  }

  return (
    <main className="main-container">
      <div className="title">Tenzies Game</div>
      <div className="square-container">
        {squareElements.map(square => {
          return square
        })}
      </div>
      <button className="roll-btn" onClick={rollSquares}>Roll</button>
    </main>
  );
}

export default App;
