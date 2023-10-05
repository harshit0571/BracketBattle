"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import Confetti from "react-confetti";

const page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };
  const id = useSearchParams().get("id");
  const title = useSearchParams().get("title");
  console.log(title);
  return (
    <div className="flex justify-center bg-gradient-to-br from-neutral-800 via-black to-indigo-900 h-full p-2 overflow-x-hidden gap-10 items-center flex-col text-white">
      <div className="text-container">
        <h1 className="md:text-8xl text-4xl">{title}</h1>
      </div>

      <div className="text-2xl">Winner: {id}</div>
      <Confetti
        numberOfPieces={150}
        width={screenWidth}
        height={screenHeight}
      />

      <div>
        <button className="bg-blue-400 text-white py-2 px-6">Share</button>
      </div>
    </div>
  );
};

export default page;
