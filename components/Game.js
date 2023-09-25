"use client";
import { useState } from "react";

export const BracketGame = ({ data }) => {
  let val = data;
  const [Round, setRound] = useState(0);
  const [Number, setNumber] = useState(0);

  return (
    <div>
      <h1>Round 1</h1>
      {Number == val.length - 1 ? (
        Round < val.length ? (
          setNumber(Number + 1)
        ) : (
          <div>Game over</div>
        )
      ) : (
        <div>{val[Number]}</div>
      )}
    </div>
  );
};

const GameRound = () => {
  return <div>Hello</div>;
};
