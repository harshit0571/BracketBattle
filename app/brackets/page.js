"use client";
import BracketValue from "@/components/BracketValue";
import MapBothSides from "@/utils/MapBothSides";
import splitArrayInHalf from "@/utils/SplitArrayInHalf";
import { useSearchParams } from "next/navigation";

const BracketPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("data");
  const title = searchParams.get("title");

  const values = search.split(",");

  const [firstHalf, secondHalf] = splitArrayInHalf(values);

  const array = MapBothSides(firstHalf, secondHalf);
  console.log(values, firstHalf, secondHalf);

  return (
    <div className="w-full font-sans justify-center items-center flex flex-col">
      <h1 className="text-6xl font-bold text-center text-blue-600 ">
        {title} Bracket
      </h1>
      <p className="text-center text-3xl mt-1 text-gray-400">
        bracket-battle.com
      </p>
      <div className="flex flex-col bg-black h-[700px] w-full overflow-auto scroll-m-0 md:w-[98%] gap-5">
        {array.map((node) => {
          return node;
        })}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-md mt-20">
        Start
      </button>
    </div>
  );
};

export default BracketPage;
