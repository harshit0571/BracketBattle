"use client";
import Popup from "@/components/Popup";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const page = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  const id = useSearchParams().get("id");
  const title = useSearchParams().get("title");
  const path = useSearchParams().get("path");
  console.log(title);
  return (
    <div className="flex justify-center bg-gradient-to-br from-neutral-800 via-black to-indigo-900 h-full min-h-screen p-2 overflow-x-hidden gap-10 items-center flex-col text-white">
      <div className="text-container">
        <h1 className="md:text-8xl text-4xl">{title}</h1>
      </div>

      <div className="text-2xl">Winner: {id}</div>
      <Confetti
        numberOfPieces={150}
        width={screenWidth}
        height={screenHeight}
      />
      <div className="flex flex-col gap-5">
        <button
          className="bg-blue-400 text-white py-2 px-6"
          onClick={() => {
            navigator.clipboard.writeText(path);
          }}
        >
          Share
        </button>
        <button className="bg-red-400 text-white py-2 px-6">
          <Link href="/">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
