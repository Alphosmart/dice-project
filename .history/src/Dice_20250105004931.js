import React, { useState } from "react";

const Dice = () => {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Roll the Dice</h1>
      <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold bg-white border-2 border-gray-400 rounded-lg shadow">
        {diceNumber}
      </div>
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
