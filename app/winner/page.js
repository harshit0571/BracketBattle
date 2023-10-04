"use client";
import { useParams, useSearchParams } from "next/navigation";
import Confetti from "react-confetti";

const page = () => {
  const id = useSearchParams().get("id");
  const title = useSearchParams().get("title");
  console.log(title);
  return (
    <div className="flex justify-center mt-20 gap-10 items-center flex-col">
      <h1 className="text-5xl">{title}</h1>
      <div className="text-2xl">Winner: {id}</div>
      <Confetti numberOfPieces={150} width={3000} height={200} />

      <div>
        <button className="bg-blue-400 text-white py-2 px-6">Share</button>
      </div>
    </div>
  );
};

export default page;
