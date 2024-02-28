"use client";
import Popup from "@/components/Popup";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Loader = () => (
  <div className="loader z-50 flex flex-col items-center gap-4">
    <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin "></div>
  </div>
);

const page = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [loading, setLoading] = useState(false); // State for loader

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
  const Router = useRouter();
  console.log(title);
  return (
    <div className="flex justify-center bg-gradient-to-br from-neutral-800 via-black to-indigo-900 h-full min-h-screen p-2 overflow-x-hidden gap-10 items-center flex-col text-white">
      <div className="text-container">
        {loading ? (
          <Loader />
        ) : (
          <h1 className="md:text-8xl text-4xl">{title}</h1>
        )}
      </div>

      <div className="text-2xl">Winner: {id}</div>
      <Confetti
        numberOfPieces={150}
        width={screenWidth}
        height={screenHeight}
      />
      <div className="flex flex-col gap-5">
        <button
          className="bg-green-400 text-white py-2 px-6"
          onClick={() => {
            Router.push(path);
          }}
        >
          Play Again
        </button>
        <button
          className="bg-blue-400 text-white py-2 px-6"
          onClick={() => {
            navigator.clipboard.writeText(path);
            alert("copied");
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
