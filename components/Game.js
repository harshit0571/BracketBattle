"use client";
import { useState } from "react";
import GameRound from "./GameRound";

export const BracketGame = ({ data }) => {
  const [val, setval] = useState(data);
  const [Round, setRound] = useState(0);
  const [Number, setNumber] = useState(0);
  const [Winner, setWinner] = useState("");
  const NextRound = () => {
    setNumber(0);
    setval([1, 2, 3, 4]);
  };
  console.log(Winner);
  return (
    <div className="w-full flex">
      {Number < val.length ? (
        <GameRound
          first={val[Number]}
          second={val[Number + 1]}
          setWinner={setWinner}
          setNumber={setNumber}
          Number={Number}
        />
      ) : (
        NextRound()
      )}
    </div>
  );
};
