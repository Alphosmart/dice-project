import React, { useState } from "react";

const Dice = () => {
  const diceImages = [
    require("./resources/images/one.png"),
    require("./resources/images/two.png"),
    require("./resources/images/three.png"),
    require("./resources/images/four.png"),
    require("./resources/images/five.png"),
    require("./resources/images/six.png"),
  ];

  const [diceImage1, setDiceImage1] = useState(diceImages[0]);
  const [diceImage2, setDiceImage2] = useState(diceImages[0]);

  const rollDice = () => {
    const randomImage1 = diceImages[Math.floor(Math.random() * 6)];
    const randomImage2 = diceImages[Math.floor(Math.random() * 6)];
    setDiceImage1(randomImage1);
    setDiceImage2(randomImage2);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Roll the Dice</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <img
            src={diceImage1}
            alt="Dice 1"
            className="w-20 h-20 bg-white border-2 border-gray-400 rounded-lg shadow"
          />
          <img
            src={diceImage2}
            alt="Dice 2"
            className="w-20 h-20 bg-white border-2 border-gray-400 rounded-lg shadow"
          />
        </div>
        <button
          onClick={rollDice}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default Dice;