import React, { useState } from "react";

// Dice component
const Dice = () => {
  // Array of dice images
  const diceImages = [
    require("./resources/images/one.png"),
    require("./resources/images/two.png"),
    require("./resources/images/three.png"),
    require("./resources/images/four.png"),
    require("./resources/images/five.png"),
    require("./resources/images/six.png"),
  ];

  // State to hold the current images of the two dice
  const [diceImage1, setDiceImage1] = useState(diceImages[0]);
  const [diceImage2, setDiceImage2] = useState(diceImages[0]);

  // Function to roll the dice and update the images
  const rollDice = () => {
    const randomImage1 = diceImages[Math.floor(Math.random() * 6)];
    const randomImage2 = diceImages[Math.floor(Math.random() * 6)];
    setDiceImage1(randomImage1);
    setDiceImage2(randomImage2);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Roll the Dice</h1>
      <div className="flex space-x-4">
        {/* Display the first dice image */}
        <img
          src={diceImage1}
          alt="Dice 1"
          className="w-20 h-20 bg-white border-2 border-gray-400 rounded-lg shadow"
          style={{ width: "80px", height: "80px" }}
        />
        {/* Display the second dice image */}
        <img
          src={diceImage2}
          alt="Dice 2"
          className="w-20 h-20 bg-white border-2 border-gray-400 rounded-lg shadow"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      {/* Button to roll the dice */}
      <button
        onClick={rollDice}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;