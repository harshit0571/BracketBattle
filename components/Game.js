"use client";
import { useState } from "react";
import GameRound from "./GameRound";
import { useRouter } from "next/navigation";

export const BracketGame = ({ data, title, path }) => {
  const [val, setval] = useState(data);
  const [Round, setRound] = useState(1);
  const [Number, setNumber] = useState(0);
  const [Winner, setWinner] = useState([]);

  const router = useRouter();
  console.log(Winner);
  const NextRound = () => {
    setNumber(0);
    setRound(Round + 1);
    setWinner([]);
    setval(Winner);

    if (Winner.length == 1) {
      router.push(`/winner?id=${Winner}&title=${title}&path=${path}`);
    }
  };
  return (
    <div className="w-full flex text-white flex-col gap-20">
      <h1 className="text-center text-5xl text-white">Round {Round}</h1>
      {Number < val.length ? (
        <GameRound
          first={val[Number]}
          second={val[Number + 1]}
          setWinner={setWinner}
          setNumber={setNumber}
          Number={Number}
          Round={Round}
        />
      ) : (
        NextRound()
      )}
    </div>
  );
};

// http://localhost:3000/brackets?data=Stronger,%20Gold%20Digger,%20Heartless,%20Jesus%20Walks,%20All%20of%20the%20Lights,%20Black%20Skinhead,%20Bound%202,%20Power,%20Runaway,%20Ultralight%20Beam,%20Famous,%20Flashing%20Lights,%20Love%20Lockdown,%20Touch%20the%20Sky,%20Lost%20in%20the%20World,%20No%20Church%20in%20the%20Wild&title=kanye%20west%20songs
