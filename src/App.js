import React from "react";
import Square from "./Square";
import { nanoid } from "nanoid"


function App() {
  const [squareElements, setSquareElements] = React.useState(newDice())


  function generate() {
    return {
      number: Math.ceil(Math.random() * 9),
      isHeld: false,
      id: nanoid()
    }
  }

  function newDice() {
    const tempArray = []

    for (let i = 0; i < 10; i++) {
      tempArray.push(generate())
    }
    return tempArray
  }

  const squares = squareElements.map(element => (
    <Square
      key={element.id}
      id={element.id}
      number={element.number}
      isHeld={element.isHeld}
      handleClick={handleClick}
    />
  ))

  function handleClick(id) {
    setSquareElements(prevSquareElements => prevSquareElements.map(element => {
      return element.id === id ?
      {...element, isHeld: !element.isHeld} :
      element
    }))
  }

  function roll() {
    setSquareElements(prevSquareElements => prevSquareElements.map(element => {
      return element.isHeld ?
      element :
      generate()
    }))
  }

  return (
    <main className="main-container">
      <div className="title">Tenzies Game</div>
      <div className="square-container">
        {squares}
      </div>
      <button className="roll-btn" onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
