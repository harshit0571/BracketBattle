"use client";
import { useState } from "react";
import GameRound from "./GameRound";

export const BracketGame = ({ data }) => {
  let val = data;
  const [Round, setRound] = useState(0);
  const [Number, setNumber] = useState(0);
  return (
    <div className="w-full bg-red-100 flex">
      {Number < val.length - 1 ? (
        <GameRound first={val[Number]} second={val[Number + 1]} />
      ) : (
        console.log(Number)
      )}
    </div>
  );
};
